$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I should login into orangehrmlive website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15701237600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should log in successfully",
  "description": "",
  "id": "login-test;user-should-log-in-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully \"Welcome FirstName\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 661013600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 525050400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 508171100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3094484700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome FirstName",
      "offset": 29
    }
  ],
  "location": "LoginStepdefs.iShouldLoginSuccessfully(String)"
});
formatter.result({
  "duration": 20132941200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Welcome FirstName\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.77)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-K2RFLLMD\u0027, ip: \u0027192.168.0.35\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.77, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\virohi\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64129}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 487c0147aaa4a8d95cefaac169328277\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Welcome FirstName\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:50)\r\n\tat com.orangehrmlive.demo.pages.DashBoardPage.gettingTextFromDashboardPage(DashBoardPage.java:24)\r\n\tat com.orangehrmlive.demo.cucumber.stepDefs.LoginStepdefs.iShouldLoginSuccessfully(LoginStepdefs.java:33)\r\n\tat ???.Then I should login successfully \"Welcome FirstName\"(src/test/java/resources/featurefiles/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5602759400,
  "status": "passed"
});
formatter.before({
  "duration": 8671924600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should log out successfully",
  "description": "",
  "id": "login-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke,"
    },
    {
      "line": 12,
      "name": "@Sanity,"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on welcome firstname tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Log out link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should logout successfully \"LOGIN Panel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 535056300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 218706700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 5420267900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnWelcomeFirstnameTab()"
});
formatter.result({
  "duration": 512916000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 1490268700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 30
    }
  ],
  "location": "LoginStepdefs.iShouldLogoutSuccessfully(String)"
});
formatter.result({
  "duration": 152559700,
  "status": "passed"
});
formatter.after({
  "duration": 2048391500,
  "status": "passed"
});
});