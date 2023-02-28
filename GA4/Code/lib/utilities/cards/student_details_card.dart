import 'package:alumni_app/utilities/rounded_button_small.dart';
import 'package:alumni_app/views/bottom_sheets/show_student_full_details_bottom_sheet.dart';
import 'package:flutter/material.dart';

class StudentDetailsCard extends StatelessWidget {
  final String fullName;
  final String course;
  final String passYear;
  final String email;

  StudentDetailsCard(
      {super.key,
      required this.course,
      required this.passYear,
      required this.fullName,
      required this.email});

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
                      'Course: ',
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(course),
                  ],
                ),
                Row(
                  children: [
                    const Text(
                      'Pass-out year: ',
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(passYear),
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
                  builder: (context) => DisplayStudentFullDataScreen(
                    email: email,
                    passYear: passYear,
                    course: course,
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
