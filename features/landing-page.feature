
Feature: Saltash Landing Page Tests

Background:
  Given I am on Saltash landing page


#@LPSideNavContactsScenario
  Scenario: User Clicks Contacts while logged Out
    When I click contacts
    Then I am on Saltash landing page

  Scenario: close and Open Side Navigation
    When I close left side Navigation
    Then I am on Saltash landing page
    When I open left side Navigation
    Then I am on Saltash landing page

#
#  //Sprint 0
#  //User Story  101 - User uses incorrect password
#
#  //Sprint 1
#
#  //User Story 102 - User uses non-existent username
#  //User Story 109 - user misses user name and/or password
#
#@OutlineScenario
Scenario Outline: User uses incorrect username and/or password
  When I enter <user> as Username
  And I enter <pWord> as Password
  And I click on Login button
 Then I should see <loginErrorMessage>
Examples:
|       user                |    pWord       |                    loginErrorMessage                       |
| "adminn@admin.com"        | "RRRRRR"       | "The username or password are incorrect. Please try again" |
| "email.domain.com"        | "Password10!"  | "The username or password are incorrect. Please try again" |
| "email@domain@domain.com" | "Pass1234"     | "The username or password are incorrect. Please try again" |
##| 1122@domain@2323.com    | 12341234     | The username or password are incorrect. Please try again |
##| test11@test11.com       |              |           The password field is required.                |
##|                         | AAA222TTT    |           The username field is required.                |
##|   23423423424234        | 1231231231   | The username or password are incorrect. Please try again |
##|                         |              | The username or password are incorrect. Please try again |
##|                         |              | The username or password are incorrect. Please try again |
