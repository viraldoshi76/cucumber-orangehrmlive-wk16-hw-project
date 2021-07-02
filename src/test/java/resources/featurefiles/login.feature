Feature: Login Test
  As a User I should login into orangehrmlive website

@Smoke,@Sanity
  Scenario: User should log in successfully
    Given I am on homepage
    When I enter username "Admin"
    And I enter password "admin123"
    And I click on login button
    Then I should login successfully "Welcome"

  @Smoke,@Sanity,@Regression
   Scenario: User should log out successfully
     Given I am on homepage
     When I enter username "Admin"
     And I enter password "admin123"
     And I click on login button
     And I click on welcome firstname tab
     And I click on Log out link
     Then I should logout successfully "LOGIN Panel"
