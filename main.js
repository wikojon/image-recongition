Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    image_quality:90
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='capture_image' src='"+data_uri+"' >";
    })
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UyTc2qbdC/model.json", modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function check()
{
    //it wis putting capture_image in the varabile
    img = document.getElementById("capture_image");
    //it is classifing the img and getresults
    classifier.classify(img, getResults);
}

function getResults(error, results)
{
    //it is putting error in th console
    if (error) {
        console.error(error)
    }
    else {
        //putting results in the console
       console.log(results);
       //it is putting the name of the object on the html
        document.getElementById("results_objects_name").innerHTML = results[0].label;
        //it is putting the accuracy on the html
        document.getElementById("results_objects_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

