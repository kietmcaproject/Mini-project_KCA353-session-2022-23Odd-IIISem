import 'package:alumni_app/controllers/auth_controller.dart';
import 'package:alumni_app/controllers/snackbar_controller.dart';
import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/rounded_button.dart';
import 'package:alumni_app/utilities/rounded_text_field.dart';
import 'package:alumni_app/utilities/validator.dart';
import 'package:alumni_app/views/user_sign_in.dart';
import 'package:alumni_app/views/bottom_sheets/verify_email_otp_bottom_sheet.dart';
import 'package:email_auth/email_auth.dart';
import 'package:flutter/material.dart';

class StudentSignUp extends StatefulWidget {
  StudentSignUp({super.key});

  @override
  State<StudentSignUp> createState() => _StudentSignUpState();
}

class _StudentSignUpState extends State<StudentSignUp> {
  final TextEditingController fullNameController = TextEditingController();

  final TextEditingController emailController = TextEditingController();

  final TextEditingController courseController = TextEditingController();

  final TextEditingController passYearController = TextEditingController();

  final TextEditingController passwordController = TextEditingController();

  final TextEditingController confirmPassController = TextEditingController();

  Validator validator = Validator();

  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Welcome Student!',
                style: TextStyle(fontSize: 30.0),
              ),
              Text(
                'Create an account!',
                style: TextStyle(fontSize: 20.0),
              ),
              RoundedInputFeild(
                hintText: 'Enter full name.',
                icon: Icons.person,
                textController: fullNameController,
              ),
              RoundedInputFeild(
                hintText: 'Email',
                icon: Icons.email,
                textController: emailController,
              ),
              RoundedInputFeild(
                hintText: 'Course',
                icon: Icons.school,
                textController: courseController,
              ),
              RoundedInputFeild(
                hintText: 'Passout year',
                icon: Icons.calendar_month,
                textController: passYearController,
              ),
              RoundedInputFeild(
                hintText: 'Password',
                icon: Icons.password_sharp,
                textController: passwordController,
                obscureText: true,
              ),
              RoundedInputFeild(
                hintText: 'Confirm Password',
                icon: Icons.password_sharp,
                textController: confirmPassController,
                obscureText: true,
              ),
              RoundedButton(
                onPress: isLoading
                    ? () {
                        print('Loading');
                      }
                    : () async {
                        if (emailController.text.isEmpty ||
                            courseController.text.isEmpty ||
                            fullNameController.text.isEmpty ||
                            passYearController.text.isEmpty ||
                            passwordController.text.isEmpty ||
                            confirmPassController.text.isEmpty) {
                          displaySnackbar(
                              context, 'Please fill all the fields');
                        } else {
                          if (validator.emailValidator(emailController.text)) {
                            displaySnackbar(context, 'Email not valid!');
                          } else if (double.parse(
                                      DateTime.now().year.toString()) >
                                  double.parse(passYearController.text) ||
                              passYearController.text.length != 4 ||
                              validator
                                  .yearValidator(passYearController.text)) {
                            displaySnackbar(
                                context, 'Please enter correct year!');
                          } else if (passwordController.text !=
                              confirmPassController.text) {
                            displaySnackbar(context,
                                'Password and confirm password fields do not match!');
                          } else if (passwordController.text.length < 6) {
                            displaySnackbar(context,
                                'Password must be more than 6 characters in length!');
                          } else {
                            setState(() {
                              isLoading = true;
                            });
                            EmailAuth emailAuth =
                                EmailAuth(sessionName: 'KIET Alumni App');
                            var res = await emailAuth.sendOtp(
                                recipientMail: emailController.text.trim(),
                                otpLength: 5);
                            setState(() {
                              isLoading = false;
                            });
                            final result = await showModalBottomSheet(
                              isScrollControlled: true,
                              context: context,
                              builder: (context) => VerifyEmailOtpScreen(
                                email: emailController.text,
                                emailAuth: emailAuth,
                              ),
                            );

                            if (result) {
                              displaySnackbar(context,
                                  'Email verification success, Account created!');
                              AuthController auth = AuthController();
                              String message = await auth.signUpStudent(
                                  fullNameController.text,
                                  emailController.text,
                                  courseController.text,
                                  passYearController.text,
                                  passwordController.text);
                              displaySnackbar(context, message);
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => UserSignIn(),
                                ),
                              );
                            } else {
                              displaySnackbar(context, 'Something went wrong!');
                            }
                          }
                        }
                      },
                isLoading: isLoading,
                buttonText: 'Signup',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
