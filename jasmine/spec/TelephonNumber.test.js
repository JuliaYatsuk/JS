describe("US valid telephon number", function(){
    
    it("Telephon number is valid", function(){
        
        expect(telephoneCheck("1 555-555-5555")).toEqual(true);
        expect(telephoneCheck("1 (555) 555-5555")).toEqual(true);
        expect(telephoneCheck("5555555555")).toEqual(true);
        expect(telephoneCheck("555-555-5555")).toEqual(true);
        expect(telephoneCheck("(555)555-5555")).toEqual(true);
        expect(telephoneCheck("1(555)555-5555")).toEqual(true);
        expect(telephoneCheck("1 555 555 5555")).toEqual(true);
        expect(telephoneCheck("1 456 789 4444")).toEqual(true);
    })

    it("Telephon number is not valid", function(){
        
        expect(telephoneCheck("555-5555")).toEqual(false);
        expect(telephoneCheck("5555555")).toEqual(false);
        expect(telephoneCheck("1 555)555-5555")).toEqual(false);
        expect(telephoneCheck("123**&!!asdf#")).toEqual(false);
        expect(telephoneCheck("(6054756961)")).toEqual(false);
        expect(telephoneCheck("2 (757) 622-7382")).toEqual(false);
        expect(telephoneCheck("0 (757) 622-7382")).toEqual(false);
        expect(telephoneCheck("-1 (757) 622-7382")).toEqual(false);
        expect(telephoneCheck("2 757 622-7382")).toEqual(false);
        expect(telephoneCheck("10 (757) 622-7382")).toEqual(false);
        expect(telephoneCheck("27576227382")).toEqual(false);
        expect(telephoneCheck("(275)76227382")).toEqual(false);
        expect(telephoneCheck("2(757)6227382")).toEqual(false);
        expect(telephoneCheck("2(757)622-7382")).toEqual(false);
        expect(telephoneCheck("555)-555-5555")).toEqual(false);
        expect(telephoneCheck("(555-555-5555")).toEqual(false);
        expect(telephoneCheck("(555)5(55?)-5555")).toEqual(false);
    })

   
})