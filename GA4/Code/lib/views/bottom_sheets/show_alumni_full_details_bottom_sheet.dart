import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class DisplayAlumniFullDataScreen extends StatelessWidget {
  final String fullName;
  final String currDesignation;
  final String currcompany;
  final String course;
  final String passYear;
  final String phoneNo;
  final String email;

  DisplayAlumniFullDataScreen(
      {super.key,
      required this.email,
      required this.fullName,
      required this.currDesignation,
      required this.currcompany,
      required this.course,
      required this.passYear,
      required this.phoneNo});

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
                          'Current Company -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          currcompany,
                          style: const TextStyle(
                            fontSize: 20.0,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 20.0,
                    ),
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
                          currDesignation,
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
                          'E-mail -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        TextButton(
                          child: Text(
                            email,
                            style: email.length <= 29
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
                          'Phone -> ',
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        TextButton(
                          child: Text(
                            phoneNo,
                            style: const TextStyle(
                              fontSize: 20.0,
                            ),
                          ),
                          onPressed: () async {
                            final Uri url = Uri(scheme: 'tel', path: phoneNo);
                            if (await canLaunchUrl(url)) {
                              launchUrl(url);
                            }
                          },
                        )
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
                    const SizedBox(
                      height: 20.0,
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
