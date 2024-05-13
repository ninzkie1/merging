    $(document).ready(function () {
        $("#editBtn").click(function () {
            // Enable input fields
            $("#first_name, #last_name, #phone, #email, #location").prop("disabled", false);

            // Show Save and Reset buttons, hide Edit button
            $("#SaveBtn, #resetBtn").show();
            $("#editBtn").hide();
        });

        $("#SaveBtn").click(function () {
            // Submit the form
            $("#registrationForm").submit();
        });

        $("#resetBtn").click(function () {
            // Disable input fields
            $("#first_name, #last_name, #phone, #email, #location").prop("disabled", true);

            // Reset input fields to their original values
            $("#first_name").val("@Model.Firstname");
            $("#last_name").val("@Model.Lastname");
            // ... reset other fields ...

            // Show Edit button, hide Save and Reset buttons
            $("#editBtn").show();
            $("#SaveBtn, #resetBtn").hide();
        });

        // Toggle Password Visibility (move this outside the #resetBtn handler)
        $("#togglePassword").click(function () {
            var passwordField = $("#password");
            var passwordFieldType = passwordField.attr('type');

            if (passwordFieldType === 'password') {
                passwordField.attr('type', 'text');
                $(this).text("Hide"); // Change button text to "Hide"
            } else {
                passwordField.attr('type', 'password');
                $(this).text("Show"); // Change button text back to "Show"
            }
        });
    });
