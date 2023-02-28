import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/utilities/rounded_text_field.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:url_launcher/url_launcher.dart';

class DisplayStudentFullDataScreen extends StatelessWidget {
  final String fullName;
  final String course;
  final String passYear;
  final String email;

  DisplayStudentFullDataScreen({
    super.key,
    required this.email,
    required this.fullName,
    required this.course,
    required this.passYear,
  });

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
              Center(
                child: Text(
                  fullName,
                  style: const TextStyle(
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const SizedBox(
                height: 10.0,
              ),
              Padding(
                padding: EdgeInsets.only(
                  bottom: MediaQuery.of(context).viewInsets.bottom,
                  left: 20.0,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Text(
                          'E-mail -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        TextButton(
                          child: Text(
                            email,
                            style: email.length <= 25
                                ? const TextStyle(
                                    fontSize: 20.0,
                                  )
                                : const TextStyle(
                                    fontSize: 15.0,
                                  ),
                          ),
                          onPressed: () async {
                            final Uri url = Uri(scheme: 'mailto', path: email);
                            if (await canLaunchUrl(url)) {
                              launchUrl(url);
                            }
                          },
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        const Text(
                          'Course -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          course,
                          style: const TextStyle(
                            fontSize: 20.0,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 10.0,
                    ),
                    Row(
                      children: [
                        const Text(
                          'Passout Year -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          passYear,
                          style: const TextStyle(
                            fontSize: 20.0,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
