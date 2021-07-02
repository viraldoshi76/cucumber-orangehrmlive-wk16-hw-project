package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//input[@id='txtUsername']")
    WebElement userNameField;

    @FindBy(xpath = "//input[@id='txtPassword']")
    WebElement passwordField;

    @FindBy(xpath = "//input[@id='btnLogin']")
    WebElement loginButton;

    @FindBy(xpath = "//div[@id='logInPanelHeading']")
    WebElement loginPanelText;

    public void sendTextToUserNameField(String username){
        log.info("sending text to username field"+ userNameField.toString());
        sendTextToElement(userNameField,username);
    }

    public void sendToTextPasswordField(String password){
        log.info("sending text to password field"+ passwordField.toString());
        sendTextToElement(passwordField,password);
    }

    public void clickOnLoginButton(){
        log.info("clicking on Login Button"+ loginButton.toString());
        clickOnElement(loginButton);
    }

    public String gettingTextFromLoginPanel(){
        log.info("getting text from Login Panel"+ loginPanelText.toString());
        return getTextFromElement(loginPanelText);
    }

}
