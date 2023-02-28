/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ems;

import java.awt.Image;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.Timer;


/**
 *
 * @author Harsh
 */
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.PreparedStatement;
public class AttemptExam extends javax.swing.JFrame {
 
    public String questionId="1";
    public String answer;
    public int min=0;
    public int sec=0;
    public int marks=0;
    Timer time;
    int totaltime=10;
    String totalquestion="10";
    
    public void answerCheck(){
        String stAnswer="";
        
        if(jrb1.isSelected()){
            stAnswer=jrb1.getText();
        }
        else if(jrb2.isSelected()){
            stAnswer=jrb2.getText();
        }
        else if(jrb3.isSelected()){
            stAnswer=jrb3.getText();
        }
        else if(jrb4.isSelected()){
            stAnswer=jrb4.getText();
        }
        else
        {
            
        }
        if(stAnswer.equals(answer)){
            marks=marks+1; 
            jLabel18.setText(String.valueOf(marks));
        }
        
        //ques no change
        
        int qid=Integer.parseInt(questionId);
        qid++;
        questionId=String.valueOf(qid);
        
        //clear radiobuttons
        
        jrb1.setSelected(false);
        jrb2.setSelected(false);
        jrb3.setSelected(false);
        jrb4.setSelected(false);
        
        //hide next btn on last question
        if(questionId.equals(totalquestion)){
            jButton2.setVisible(false);
        }
    }
    
    public void question(){
        
        try{
            Connection con=ConnectionProvider.getCon();
            Statement st=con.createStatement();
                        
            ResultSet rs1=st.executeQuery("select * from question where qid="+questionId+";");
            while(rs1.next()){
                jLabel8.setText(rs1.getString(1));
                jLabel9.setText(rs1.getString(2));
                jrb1.setText(rs1.getString(3));
                jrb2.setText(rs1.getString(4));
                jrb3.setText(rs1.getString(5));
                jrb4.setText(rs1.getString(6));
                answer=rs1.getString(7);
            }
        }
        catch(Exception e){
            JOptionPane.showMessageDialog(null, e);
        }
        
    }
    public void submit(){
       
       answerCheck();
       String rollno,name,date;
       rollno=jLabel5.getText();
       name=jLabel6.getText();
       date=jLabel13.getText();
       try{
           Connection con=ConnectionProvider.getCon();
           PreparedStatement ps=con.prepareStatement("insert into result values(?,?,?,?)");
           ps.setString(1,rollno );
           ps.setString(2,name );
           ps.setString(3,date );
           ps.setInt(4,marks );
           ps.executeUpdate();
           time.stop();
           JOptionPane.showMessageDialog(null, "Result stored");
           
           new Result(rollno,name,date,marks).setVisible(true);
           setVisible(false);
       }
       catch(Exception e){
           JOptionPane.showMessageDialog(null, e);
       }
    }
    /**
     * Creates new form Attempt_Exam
     */
    public AttemptExam() {
        initComponents();
        display();
        //date
        SimpleDateFormat dformat=new SimpleDateFormat("dd-MMM-yyyy");
        Date date = new Date();
        jLabel13.setText(dformat.format(date));  
        
    }
    
    public AttemptExam(String str) {
        initComponents();
        display();
        jLabel5.setText(str);
        jLabel14.setText(String.valueOf(totaltime)+" min");
        jLabel7.setText(totalquestion);
        
        //date
        SimpleDateFormat dformat=new SimpleDateFormat("dd-MMM-yyyy");
        Date date = new Date();
        jLabel13.setText(dformat.format(date));
        
        
        try{
            Connection con=ConnectionProvider.getCon();
            Statement st=con.createStatement();
            ResultSet rs=st.executeQuery("select name from student_details where roll_no="+str+";");
            while(rs.next())
            jLabel6.setText(rs.getString(1));
            
            ResultSet rs1=st.executeQuery("select * from question where qid="+questionId+";");
            while(rs1.next()){
                jLabel8.setText(rs1.getString(1));
                jLabel9.setText(rs1.getString(2));
                jrb1.setText(rs1.getString(3));
                jrb2.setText(rs1.getString(4));
                jrb3.setText(rs1.getString(5));
                jrb4.setText(rs1.getString(6));
                answer=rs1.getString(7);
            }
        
        
        }
        catch(Exception e){
            JOptionPane.showMessageDialog(null, e);
        }
        
       time=new Timer(1000,new ActionListener(){
            @Override
            public void actionPerformed(ActionEvent e) {
                
                jLabel16.setText(String.valueOf(min)+"min");
                jLabel15.setText(String.valueOf(sec)+"sec");
                
                if(sec==10){
                    sec=0;
                    min++;
                    if(min==totaltime){
                        time.stop();
                        //answerCheck();
                        JOptionPane.showMessageDialog(null, "Your time is over !!!");
                        submit();
                        
                    }//Ist if closed
                }// IInd if closed
                
                sec++;
            }//actionperformed closed
        });//time closed
       time.start();
    }//contructor closed
    
    public void display(){
        ImageIcon icon=new ImageIcon("C:\\Users\\Harsh\\Desktop\\ems img\\qems\\quiz bg.jpg");
        Image img=icon.getImage();
        Image scaledImg=img.getScaledInstance(label.getWidth(), label.getHeight(), Image.SCALE_SMOOTH);
        ImageIcon scaledIcon=new ImageIcon(scaledImg);
        label.setIcon(scaledIcon);
    }
    
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jLabel14 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();
        jLabel16 = new javax.swing.JLabel();
        jLabel17 = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel18 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jrb1 = new javax.swing.JRadioButton();
        jrb2 = new javax.swing.JRadioButton();
        jrb3 = new javax.swing.JRadioButton();
        jrb4 = new javax.swing.JRadioButton();
        jButton2 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        label = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel1.setBackground(new java.awt.Color(255, 204, 102));
        jPanel1.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        jPanel1.setForeground(new java.awt.Color(153, 0, 0));

        jLabel1.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(153, 0, 0));
        jLabel1.setIcon(new javax.swing.ImageIcon("C:\\Users\\Harsh\\Desktop\\ems img\\allq.png")); // NOI18N
        jLabel1.setText("   Attempt Exam");

        jButton1.setIcon(new javax.swing.ImageIcon("C:\\Users\\Harsh\\Desktop\\ems img\\close1.png")); // NOI18N
        jButton1.setContentAreaFilled(false);
        jButton1.setFocusPainted(false);
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jLabel10.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(153, 0, 0));
        jLabel10.setText("Date :");

        jLabel11.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel11.setForeground(new java.awt.Color(153, 0, 0));
        jLabel11.setText("Total Time :");

        jLabel12.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel12.setForeground(new java.awt.Color(153, 0, 0));
        jLabel12.setText("Time Elapsed :");

        jLabel13.setFont(new java.awt.Font("Tahoma", 1, 20)); // NOI18N
        jLabel13.setForeground(new java.awt.Color(153, 0, 0));
        jLabel13.setText("jLabel13");

        jLabel14.setFont(new java.awt.Font("Tahoma", 1, 20)); // NOI18N
        jLabel14.setForeground(new java.awt.Color(153, 0, 0));
        jLabel14.setText("jLabel14");

        jLabel15.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel15.setForeground(new java.awt.Color(255, 0, 0));
        jLabel15.setText("00 sec");

        jLabel16.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel16.setForeground(new java.awt.Color(255, 0, 0));
        jLabel16.setText("00 min");

        jLabel17.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel17.setText(":");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addGap(29, 29, 29)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 305, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 272, Short.MAX_VALUE)
                .addComponent(jLabel10)
                .addGap(18, 18, 18)
                .addComponent(jLabel13)
                .addGap(117, 117, 117)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel11)
                    .addComponent(jLabel12))
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel16)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jLabel17, javax.swing.GroupLayout.PREFERRED_SIZE, 17, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(2, 2, 2)
                        .addComponent(jLabel15))
                    .addComponent(jLabel14))
                .addGap(142, 142, 142)
                .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 69, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel1, javax.swing.GroupLayout.DEFAULT_SIZE, 94, Short.MAX_VALUE)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(10, 10, 10)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(jLabel11)
                                    .addComponent(jLabel14)
                                    .addComponent(jLabel10)
                                    .addComponent(jLabel13))
                                .addGap(26, 26, 26)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(jLabel12)
                                    .addComponent(jLabel15)
                                    .addComponent(jLabel16)
                                    .addComponent(jLabel17)))
                            .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 64, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1366, 120));

        jPanel2.setBackground(new java.awt.Color(255, 204, 102));
        jPanel2.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));

        jLabel2.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(153, 0, 0));
        jLabel2.setText("Roll No");

        jLabel3.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(153, 0, 0));
        jLabel3.setText(" Name :");

        jLabel4.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(153, 0, 0));
        jLabel4.setText("Total Questions :");

        jLabel5.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(153, 0, 0));
        jLabel5.setText("jLabel5");

        jLabel6.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(153, 0, 0));
        jLabel6.setText("jLabel6");

        jLabel7.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(153, 0, 0));
        jLabel7.setText("jLabel7");

        jLabel18.setText("marks");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGap(57, 57, 57)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2)
                    .addComponent(jLabel4)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 28, Short.MAX_VALUE)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel5)
                    .addComponent(jLabel6)
                    .addComponent(jLabel7))
                .addGap(86, 86, 86))
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGap(95, 95, 95)
                .addComponent(jLabel18)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGap(52, 52, 52)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(jLabel5))
                .addGap(67, 67, 67)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(jLabel6))
                .addGap(56, 56, 56)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel7))
                .addGap(40, 40, 40)
                .addComponent(jLabel18)
                .addContainerGap(367, Short.MAX_VALUE))
        );

        getContentPane().add(jPanel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 120, -1, 660));

        jLabel8.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(153, 0, 0));
        jLabel8.setText("qid");
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(380, 190, 30, -1));

        jLabel9.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel9.setForeground(new java.awt.Color(153, 0, 0));
        jLabel9.setText("sample question");
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 190, -1, -1));

        buttonGroup1.add(jrb1);
        jrb1.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        jrb1.setForeground(new java.awt.Color(153, 0, 0));
        jrb1.setText("Opt1");
        getContentPane().add(jrb1, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 280, -1, -1));

        buttonGroup1.add(jrb2);
        jrb2.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        jrb2.setForeground(new java.awt.Color(153, 0, 0));
        jrb2.setText("Opt2");
        getContentPane().add(jrb2, new org.netbeans.lib.awtextra.AbsoluteConstraints(860, 280, -1, -1));

        buttonGroup1.add(jrb3);
        jrb3.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        jrb3.setForeground(new java.awt.Color(153, 0, 0));
        jrb3.setText("Opt3");
        getContentPane().add(jrb3, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 380, -1, -1));

        buttonGroup1.add(jrb4);
        jrb4.setFont(new java.awt.Font("Tahoma", 1, 11)); // NOI18N
        jrb4.setForeground(new java.awt.Color(153, 0, 0));
        jrb4.setText("Opt4");
        getContentPane().add(jrb4, new org.netbeans.lib.awtextra.AbsoluteConstraints(860, 380, -1, -1));

        jButton2.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jButton2.setForeground(new java.awt.Color(51, 51, 51));
        jButton2.setText("Next");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(410, 510, 110, -1));

        jButton4.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jButton4.setForeground(new java.awt.Color(51, 51, 51));
        jButton4.setText("Submit");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton4, new org.netbeans.lib.awtextra.AbsoluteConstraints(780, 510, 110, -1));

        label.setFont(new java.awt.Font("Tahoma", 1, 20)); // NOI18N
        label.setForeground(new java.awt.Color(153, 0, 0));
        getContentPane().add(label, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1380, 800));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        
        JFrame jf=new JFrame();
        jf.setAlwaysOnTop(true);
        int a=JOptionPane.showConfirmDialog(jf, "Do you really want to exit?\nAll progress will be lost!","Select",JOptionPane.YES_NO_OPTION);
        
        if(a==0)
        {
            System.exit(0);
        }
        
        System.exit(0);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        // TODO add your handling code here:
        answerCheck();
        question();
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        // TODO add your handling code here:
        int a=JOptionPane.showConfirmDialog(null, "Do you really want to submit ?","Submit",JOptionPane.YES_NO_OPTION);
        if(a==0){
            //answerCheck();
            submit();
        }
    }//GEN-LAST:event_jButton4ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(AttemptExam.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(AttemptExam.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(AttemptExam.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(AttemptExam.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new AttemptExam().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton4;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel16;
    private javax.swing.JLabel jLabel17;
    private javax.swing.JLabel jLabel18;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JRadioButton jrb1;
    private javax.swing.JRadioButton jrb2;
    private javax.swing.JRadioButton jrb3;
    private javax.swing.JRadioButton jrb4;
    private javax.swing.JLabel label;
    // End of variables declaration//GEN-END:variables
}
