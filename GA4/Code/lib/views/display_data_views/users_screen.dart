import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/views/display_data_views/account_settings.dart';
import 'package:alumni_app/views/display_data_views/display_alumni_data.dart';
import 'package:alumni_app/views/display_data_views/display_student_data.dart';
import 'package:alumni_app/views/display_data_views/display_teacher_data.dart';
import 'package:flutter/material.dart';

class UserScreen extends StatefulWidget {
  const UserScreen({super.key});

  @override
  State<UserScreen> createState() => _UserScreenState();
}

class _UserScreenState extends State<UserScreen> {
  int currIndex = 0;
  TextEditingController searchController = TextEditingController();
  final screens = [
    const DisplayAlumniData(),
    const DisplayStudentData(),
    const DisplayTeacherData(),
    AccountSettings()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[currIndex],
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: currIndex == 0
            ? const Text('Alumni page')
            : currIndex == 1
                ? const Text('Students page')
                : currIndex == 2
                    ? const Text('Teachers page')
                    : const Text('Account Settings'),
        backgroundColor: kPrimaryColor,
      ),
      bottomNavigationBar: BottomNavigationBar(
        elevation: 20.0,
        backgroundColor: kPrimaryColor,
        currentIndex: currIndex,
        onTap: (index) {
          setState(() {
            currIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.school),
            label: "Alumni",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Students",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.auto_stories),
            label: "Teachers",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: "Account",
            backgroundColor: kPrimaryColor,
          ),
        ],
      ),
    );
  }
}
