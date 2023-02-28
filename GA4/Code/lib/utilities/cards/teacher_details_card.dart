import 'package:alumni_app/utilities/rounded_button_small.dart';
import 'package:alumni_app/views/bottom_sheets/show_teacher_full_details_bottom_sheet.dart';
import 'package:flutter/material.dart';

class TeacherDetailsCard extends StatelessWidget {
  final String fullName;
  final String currDepartment;
  final String currDesignation;
  final String email;

  const TeacherDetailsCard({
    super.key,
    required this.fullName,
    required this.currDepartment,
    required this.currDesignation,
    required this.email,
  });

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
                      'Department: ',
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(currDepartment),
                  ],
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
              ],
            ),
            RoundedButtonSmall(
              onPress: () {
                print('Button pressed.');
                showModalBottomSheet(
                  isScrollControlled: true,
                  context: context,
                  builder: (context) => DisplayTeacherFullDataScreen(
                    email: email,
                    department: currDepartment,
                    currDesignation: currDesignation,
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
