import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:url_launcher/url_launcher.dart';

class DisplayTeacherFullDataScreen extends StatelessWidget {
  final String fullName;
  final String currDesignation;
  final String department;
  final String email;

  DisplayTeacherFullDataScreen({
    super.key,
    required this.email,
    required this.fullName,
    required this.currDesignation,
    required this.department,
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
              // Lottie.asset(
              //   'assets/animations/verification_animation.json',
              //   width: 180.0,
              //   height: 180.0,
              // ),
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
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Text(
                          'Current Designation -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          currDesignation.length > 15
                              ? "${currDesignation.substring(0, 16)}..."
                              : currDesignation,
                          overflow: TextOverflow.ellipsis,
                          softWrap: false,
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
                          'Department -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          department,
                          style: const TextStyle(
                            fontSize: 20.0,
                          ),
                        ),
                      ],
                    ),
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
                        )
                      ],
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
