import 'package:alumni_app/controllers/auth_controller.dart';
import 'package:alumni_app/controllers/snackbar_controller.dart';
import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/utilities/rounded_button.dart';
import 'package:alumni_app/utilities/rounded_text_field.dart';
import 'package:alumni_app/utilities/validator.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class ResetPasswordScreen extends StatelessWidget {
  ResetPasswordScreen({super.key});

  TextEditingController emailController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Please provide the e-mail"),
        backgroundColor: kPrimaryColor,
      ),
      body: Background(
        child: Container(
          width: MediaQuery.of(context).size.width * 0.80,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Please provide the email account below to send the password reset link.",
                style: TextStyle(
                  fontSize: 20.0,
                ),
              ),
              SizedBox(
                height: 10.0,
              ),
              RoundedInputFeild(
                  hintText: "Enter email",
                  icon: Icons.email,
                  textController: emailController),
              RoundedButton(
                onPress: () async {
                  Validator validator = Validator();
                  if (!validator.emailValidator(emailController.text)) {
                    AuthController authController = AuthController();
                    String res = await authController
                        .sendPasswordResetLink(emailController.text.trim());
                    Navigator.pop(context);
                    displaySnackbar(context, res);
                  } else {
                    displaySnackbar(context, "Please enter valid email!");
                  }
                },
                buttonText: "Send reset link",
                isLoading: false,
              )
            ],
          ),
        ),
      ),
    );
  }
}
