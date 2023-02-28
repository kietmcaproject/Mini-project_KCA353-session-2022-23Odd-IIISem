import 'package:alumni_app/utilities/rounded_button_small.dart';
import 'package:alumni_app/views/bottom_sheets/show_alumni_full_details_bottom_sheet.dart';
import 'package:flutter/material.dart';

class AlumniDetailsCard extends StatelessWidget {
  final String fullName;
  final String currDesignation;
  final String currcompany;
  final String course;
  final String email;
  final String passYear;
  final String phoneNo;

  const AlumniDetailsCard({
    Key? key,
    required this.fullName,
    required this.currDesignation,
    required this.currcompany,
    required this.course,
    required this.email,
    required this.passYear,
    required this.phoneNo,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5.0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15.0),
      ),
      child: Container(
        width: MediaQuery.of(context).size.width,
        padding: const EdgeInsets.symmetric(
          horizontal: 10.0,
          vertical: 10.0,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  fullName.length > 15
                      ? fullName.substring(0, 16) + "..."
                      : fullName,
                  overflow: TextOverflow.ellipsis,
                  softWrap: false,
                  style: const TextStyle(
                    fontSize: 25.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Row(
                  children: [
                    const Text(
                      'Designation: ',
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(currDesignation),
                  ],
                ),
                Row(
                  children: [
                    const Text(
                      'Current Company: ',
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(currcompany)
                  ],
                ),
              ],
            ),
            RoundedButtonSmall(
              onPress: () {
                print('Button pressed.');
                showModalBottomSheet(
                  isScrollControlled: true,
                  context: context,
                  builder: (context) => DisplayAlumniFullDataScreen(
                    email: email,
                    passYear: passYear,
                    course: course,
                    currDesignation: currDesignation,
                    currcompany: currcompany,
                    phoneNo: phoneNo,
                    fullName: fullName,
                  ),
                );
              },
              buttonText: 'Details',
            ),
          ],
        ),
      ),
    );
  }
}
