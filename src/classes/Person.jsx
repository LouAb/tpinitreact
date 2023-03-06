/**
* Louis Abid
* Version 1.0
*/
class Person{
    constructor(
        Id = 0,
        Name = "",
        FirstName = "",
        Adress = "",
        PostalCode = "",
        Age = 18
        )
    {
        this.Id = Id;
        this.Name = Name;
        this.FirstName = FirstName;
        this.Adress = Adress;
        this.PostalCode = PostalCode;
        this.Age = Age;
    }
}
  

var Person1 = new Person(1,"Person1Name","Person1FName","Adress1");
var Person2 = new Person(2,"Person2Name","Person2FName","Adress2");
var Person3 = new Person(3,"Person3Name","Person3FName","Adress3");

var list = JSON.stringify([Person1,Person2,Person3]);

export default list;