package com.orangehrmlive.demo.cucumber.stepDefs;

import com.orangehrmlive.demo.pages.DashBoardPage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String userName)  {
        new LoginPage().sendTextToUserNameField(userName);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().sendToTextPasswordField(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully \"([^\"]*)\"$")
    public void iShouldLoginSuccessfully(String welcomeText)  {
        Assert.assertTrue(new DashBoardPage().gettingTextFromDashboardPage().contains(welcomeText));
    }

    @And("^I click on welcome firstname tab$")
    public void iClickOnWelcomeFirstnameTab() {
        new DashBoardPage().clickOnWelcomeNameButton();
    }

    @And("^I click on Log out link$")
    public void iClickOnLogOutLink() {
        new DashBoardPage().clickingOnLogoutButton();
    }

    @Then("^I should logout successfully \"([^\"]*)\"$")
    public void iShouldLogoutSuccessfully(String loginText) {
        Assert.assertTrue(new LoginPage().gettingTextFromLoginPanel().contains(loginText));
    }
}
