var salaries = [];
var people = [];

var employee = document.getElementById("employee"); 
var myArray = ["Drake", "Kanye", "Kendrick", "J. Cole"];

 




	function displayResults ()
{
   let temp=0;
   let sum=0;
   let largest;
    

    for( let i = 0; i < salaries.length; i++)
    {
         sum += salaries[i];
    }

     let average = sum/salaries.length;
    

    for(let j = 0; j<salaries.length; j++)
    {
        
        if(salaries[j] > temp)
        {
            largest = salaries[j];
        }
    }
document.getElementById("results").innerHTML = "<h2> Results: <h2>" + "<p> Largest Salary = " + largest + "</p>"+"<p> Average Salary = " + average + "</p>";
}




	function displaySalary()
{
    
    var display= "";
    display += "<tr><th> Employee: </th> <th> Salary:</th></tr>"
        for(let i = 0; i < people.length; i++)
        {
            display +="<tr><td>" + people[i]+ "</td><td>"+ salaries[i] +"</td></tr>";
        }
        display += "</table>";
        document.getElementById("table").innerHTML = "<h2> The Salary Table </h2>" + display;
}



	function addSalary()
{   
    var employees = document.getElementById("employee").value;
    var salary = document.getElementById("salary").value;
    
    if(salary == NaN || salary == "")
    {
        alert("Please insert a number");
       
    }else{
        salary = parseInt(salary);
        salaries.push(salary);
        people.push(employees);
        
    }


}



