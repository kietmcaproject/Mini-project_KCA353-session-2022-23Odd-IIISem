import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/cards/teacher_details_card.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class DisplayTeacherData extends StatefulWidget {
  const DisplayTeacherData({super.key});

  @override
  State<DisplayTeacherData> createState() => _DisplayTeacherDataState();
}

class _DisplayTeacherDataState extends State<DisplayTeacherData> {
  Future<String> getTeacherData() async {
    String res = "";
    Future.delayed(const Duration(milliseconds: 5000), () {
      res = "True";
    });
    return res;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: StreamBuilder(
          stream: FirebaseFirestore.instance.collection('teachers').snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return const Center(
                  child: CircularProgressIndicator(color: kPrimaryColor));
            } else {
              return ListView(
                shrinkWrap: true,
                children: snapshot.data!.docs.map((document) {
                  return Container(
                    width: MediaQuery.of(context).size.width,
                    padding: const EdgeInsets.symmetric(
                      horizontal: 10.0,
                      vertical: 5.0,
                    ),
                    child: TeacherDetailsCard(
                      fullName: document['fullName'],
                      currDepartment: document['department'],
                      currDesignation: document['designation'],
                      email: document['email'],
                    ),
                  );
                }).toList(),
              );
            }
          },
        ),
      ),
    );
  }
}
