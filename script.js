var answer = prompt("Do you like cars? Yes or No");

if (answer == "Yes") {

    console.log("Question 1");

    answer = prompt("Which company makes Mustang? Ford or BMW");

    if (answer == "Ford") {

        console.log("Correct!");

        answer = prompt("How many cylinders does a V8 have? 6 or 8");

        if (answer == "8") {

            console.log("Correct!");

            answer = prompt("Which is faster? Sports Car or Bus");

            if (answer == "Sports Car") {

                console.log("Correct!");
                alert("YOU WIN!");

            } else {

                console.log("Wrong Answer");
                alert("GAME OVER!");

            }

        } else {

            console.log("Wrong Answer");
            alert("GAME OVER!");

        }

    } else {

        console.log("Wrong Answer");
        alert("GAME OVER!");

    }

} else {

    console.log("Wrong Answer");
    alert("GAME OVER!");

}