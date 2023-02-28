import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/utilities/rounded_button.dart';
import 'package:alumni_app/utilities/rounded_text_field.dart';
import 'package:email_auth/email_auth.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class VerifyEmailOtpScreen extends StatefulWidget {
  VerifyEmailOtpScreen(
      {super.key, required this.email, required this.emailAuth});
  final String email;
  final EmailAuth emailAuth;

  @override
  State<VerifyEmailOtpScreen> createState() => _VerifyEmailOtpScreenState();
}

class _VerifyEmailOtpScreenState extends State<VerifyEmailOtpScreen> {
  final TextEditingController otpController = TextEditingController();
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xff757575),
      child: Container(
        padding: const EdgeInsets.all(20.0),
        decoration: const BoxDecoration(
          color: kBackgroundColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(20.0),
            topRight: Radius.circular(20.0),
          ),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.min,
            children: [
              const Center(
                child: Text(
                  'Please enter the otp received on your email!',
                  style: TextStyle(
                    fontSize: 16.5,
                  ),
                ),
              ),
              Lottie.asset(
                'assets/animations/verification_animation.json',
                width: 180.0,
                height: 180.0,
              ),
              Padding(
                padding: EdgeInsets.only(
                    bottom: MediaQuery.of(context).viewInsets.bottom),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      'otp was sent on -> ${widget.email} : ',
                    ),
                    RoundedInputFeild(
                      hintText: "Enter email otp",
                      icon: Icons.message,
                      textController: otpController,
                    ),
                    RoundedButton(
                      onPress: () async {
                        setState(() {
                          isLoading = true;
                        });
                        var res = await widget.emailAuth.validateOtp(
                            recipientMail: widget.email.trim(),
                            userOtp: otpController.text);
                        setState(() {
                          isLoading = false;
                        });
                        if (res) {
                          Navigator.pop(context, res);
                        }
                      },
                      buttonText: 'Verify and proceed',
                      isLoading: isLoading,
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
