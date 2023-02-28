import 'package:alumni_app/controllers/auth_controller.dart';
import 'package:alumni_app/controllers/snackbar_controller.dart';
import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/utilities/rounded_text_field.dart';
import 'package:alumni_app/utilities/validator.dart';
import 'package:alumni_app/views/reset_password_screen.dart';
import 'package:alumni_app/views/display_data_views/users_screen.dart';
import 'package:alumni_app/views/sign_up_views/sign_up_options.dart';
import 'package:flutter/material.dart';
import 'package:alumni_app/utilities/rounded_button.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UserSignIn extends StatefulWidget {
  const UserSignIn({super.key});

  @override
  State<UserSignIn> createState() => _UserSignInState();
}

class _UserSignInState extends State<UserSignIn> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  Validator validator = Validator();
  bool isLoading = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: true,
      body: Background(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Login',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20.0,
                ),
              ),
              SvgPicture.asset('assets/icons/login.svg'),
              RoundedInputFeild(
                hintText: 'Enter your email.',
                textController: emailController,
                obscureText: false,
                icon: Icons.person,
              ),
              RoundedInputFeild(
                hintText: 'Enter your password.',
                textController: passwordController,
                obscureText: true,
                icon: Icons.password,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 45.0,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    const Text('Forget Password ?'),
                    TextButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: ((context) => ResetPasswordScreen()),
                          ),
                        );
                      },
                      child: const Text(
                        "Reset here!",
                        style: TextStyle(
                          color: kPrimaryColor,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              RoundedButton(
                onPress: isLoading
                    ? () {}
                    : () async {
                        if (emailController.text.isEmpty &&
                            passwordController.text.isEmpty) {
                          displaySnackbar(context, 'Fields cannot be empty!');
                        } else if (validator
                            .emailValidator(emailController.text)) {
                          displaySnackbar(context, 'Enter valid email!');
                        } else if (passwordController.text.isEmpty) {
                          displaySnackbar(
                              context, 'Please enter the password!');
                        } else {
                          setState(() {
                            isLoading = true;
                          });
                          AuthController authController = AuthController();
                          String res = await authController.signInUser(
                              emailController.text.trim(),
                              passwordController.text);
                          setState(() {
                            isLoading = false;
                          });
                          displaySnackbar(context, res);
                          if (res == 'Signup Success') {
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (context) => UserScreen(),
                              ),
                            );
                          }
                        }
                      },
                buttonText: 'Sign in',
                isLoading: isLoading,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text("Dont't have an account ? "),
                  TextButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => SignUpOptions(),
                        ),
                      );
                    },
                    child: const Text(
                      'Sign Up!',
                      style: TextStyle(
                        color: kPrimaryColor,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
