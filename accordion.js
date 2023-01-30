
function hideDisplay(target)
{
    
    // document.getElementById(target).style.display = 'block';

    var targetDiv = document.getElementById(target);

    if(targetDiv.style.display == "block")
    {
        targetDiv.style.display = "none";
    }
    else
    {
        targetDiv.style.display = "block";
    }

}

// Two eqaul signs compares data
// 1 == "1" true

// Three equal signs compares data and type
// 1 === "1" false