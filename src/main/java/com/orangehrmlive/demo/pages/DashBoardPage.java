package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashBoardPage extends Utility {
    private static final Logger log = LogManager.getLogger(DashBoardPage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'Welcome')]")
    WebElement welcomeText;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    WebElement logoutLink;

    @FindBy(xpath = "//a[@id='welcome']")
    WebElement clickOnWelcomeText;

    public String gettingTextFromDashboardPage(){

        log.info("getting welcome text when admin logs in"+ welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

    public void clickOnWelcomeNameButton(){
        log.info("click on welcome name button"+ clickOnWelcomeText.toString());
        clickOnElement(clickOnWelcomeText);
    }

    public void clickingOnLogoutButton(){
        log.info("clicking on logout button"+ logoutLink.toString());
        mouseHoverToElementAndClick(logoutLink);
    }

}
