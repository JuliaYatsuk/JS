describe("Profile Lookup", function(){
    
    it("Name is an actual contact's firstName and the given property (prop) is a property of that contact", function(){
        
        expect(lookUpProfile("Akira", "number")).toEqual("0543236543");
        expect(lookUpProfile("Kristian", "lastName")).toEqual("Vos");
    })

    it("Name does not correspond to any contacts then return", function(){
        
        const profile = lookUpProfile("Akiraa", "number");

        expect(profile).toEqual("No such contact");
        
    })

    it("If prop does not correspond to any valid properties of a contact found to match name", function(){
        
        const profile = lookUpProfile("Akira", "numbers");

        expect(profile).toEqual("No such property");       
    })

})