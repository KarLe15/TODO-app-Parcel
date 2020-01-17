import { enteredCorrectInputs } from "../../assets/ts/utils/functions"

describe("test enteredCorrectInputs", function(){

    it('should be wrong (no inputs)', function () {
        expect(enteredCorrectInputs("", "")).toBe(false);
    });


    /**
     * Scenarios about email
     */
    it("should be correct mail password", function(){
        expect(enteredCorrectInputs("azerty97@sqdfg.wx", "Azerty89!")).toBe(true);
    });

    it("should be wrong mail (no @ )" , function(){
        expect(enteredCorrectInputs("azerty97sqdfg.wx", "Azerty89!")).toBe(false);
    });

    it("should be wrong mail (no dot )", function(){
        expect(enteredCorrectInputs("azerty97@sqdfgxw", "Azerty89!")).toBe(false);
    });


    /**
     * Scenarios about password
     */
    it('should be correct password', function () {
        expect(enteredCorrectInputs('azerty97@sqdfg.xw', "Azere98lk!?ae")).toBe(true);
    });

    it('should be wrong password too short', function () {
        expect(enteredCorrectInputs('azerty97@sqdfg.xw', "Az9!")).toBe(false);
    });

    it('should be wrong password too long', function () {
        expect(enteredCorrectInputs("azerty97@sqdfg.xw", "Azere98azmlek!?zaeskjde8jazlekj")).toBe(false);
    });

    it('should be wrong password (no capital)', function () {
        expect(enteredCorrectInputs("azert97@sqdfg.xw", "azere98lk!?ae")).toBe(false);
    });

    it('should be wrong password (no number)', function () {
        expect(enteredCorrectInputs('azerty97@sqdfg.xw', "Azereiulk!?ae")).toBe(false);
    });

    it('should be wrong password (no spec char)', function () {
        expect(enteredCorrectInputs("azerty97@sqdfg.xw", "Azerty89l")).toBe(false);
    });

});