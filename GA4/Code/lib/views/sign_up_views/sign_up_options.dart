import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/utilities/rounded_button.dart';
import 'package:alumni_app/views/sign_up_views/alumni_sign_up.dart';
import 'package:alumni_app/views/sign_up_views/student_sign_up.dart';
import 'package:alumni_app/views/sign_up_views/teacher_sign_up.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SignUpOptions extends StatelessWidget {
  const SignUpOptions({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBackgroundColor,
      body: Background(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Create an account!',
                style: TextStyle(fontSize: 30.0),
              ),
              const Text(
                'Select account type!',
                style: TextStyle(fontSize: 20.0),
              ),
              const SizedBox(
                height: 30.0,
              ),
              SvgPicture.asset('assets/icons/chat.svg'),
              const SizedBox(
                height: 30.0,
              ),
              RoundedButton(
                  isLoading: false,
                  onPress: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => AlumniSignUp(),
                      ),
                    );
                  },
                  buttonText: 'Signup as an Alumni'),
              RoundedButton(
                  isLoading: false,
                  onPress: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => StudentSignUp(),
                      ),
                    );
                  },
                  buttonText: 'Signup as a Student'),
              RoundedButton(
                  isLoading: false,
                  onPress: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => TeacherSignUp(),
                      ),
                    );
                  },
                  buttonText: 'Signup as a Teacher'),
            ],
          ),
        ),
      ),
    );
  }
}
