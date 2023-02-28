/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ems;

import java.sql.*;
import javax.swing.JFrame;
import javax.swing.JOptionPane;


/**
 *
 * @author Harsh
 */
public class ConnectionProvider {
    public static Connection getCon(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","");
            
            return con;
        }
        catch(Exception e){     
            
            return null;
        }
    
    }
}
