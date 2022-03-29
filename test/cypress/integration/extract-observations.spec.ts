import * as util from "../support/util";

describe('Form with extrac observation extension', ()=>{
  it('should be able to extrac observations', ()=> {
    cy.visit('test/pages/addFormToPageTest.html');
    util.addFormToPage('extractObs-test.R4.json', null, {fhirVersion: 'R4'});
    cy.window().then((win)=> {
      let bundle = win.LForms.Util.getFormFHIRData("QuestionnaireResponse","R4", null, {extract: true})
      expect(bundle.length).to.equal(4);
      expect(bundle[0].resourceType).to.equal("QuestionnaireResponse");
      expect(bundle[0].item.length).to.equal(3);
      expect(bundle[0].item[0].answer).to.eql([{valueBoolean: true}]);
      expect(bundle[0].item[1].answer).to.eql([{valueCoding: {code: 'code1', display: 'answer 1'}}]);
      expect(bundle[0].item[2].answer).to.eql([{valueCoding: {code: 'codea', display: 'answer a'}}]);

      expect(bundle[1].resourceType).to.equal("Observation");
      expect(bundle[1].valueBoolean).to.equal(true);
      expect(bundle[2].resourceType).to.equal("Observation");
      expect(bundle[2].valueCodeableConcept).to.eql({coding: [{code: 'code1', display: 'answer 1'}], text: "answer 1"});
      expect(bundle[3].resourceType).to.equal("Observation");
      expect(bundle[3].valueCodeableConcept).to.eql({coding: [{code: 'codea', display: 'answer a'}], text: "answer a"});
    })
    
  });

  it('should not extract observations from empty items', ()=> {
    cy.visit('test/pages/addFormToPageTest.html');
    util.addFormToPage('extractObs-test.R4.json', null, {fhirVersion: 'R4'});

    cy.byId('choiceItem2/1').click().clear().type('{enter}');
    cy.window().then((win)=> {
      let bundle = win.LForms.Util.getFormFHIRData("QuestionnaireResponse","R4", null, {extract: true})
      expect(bundle.length).to.equal(3);
      expect(bundle[0].resourceType).to.equal("QuestionnaireResponse");
      expect(bundle[0].item.length).to.equal(2);
      expect(bundle[0].item[0].answer).to.eql([{valueBoolean: true}]);
      expect(bundle[0].item[1].answer).to.eql([{valueCoding: {code: 'code1', display: 'answer 1'}}]);

      expect(bundle[1].resourceType).to.equal("Observation");
      expect(bundle[1].valueBoolean).to.equal(true);
      expect(bundle[2].resourceType).to.equal("Observation");
      expect(bundle[2].valueCodeableConcept).to.eql({coding: [{code: 'code1', display: 'answer 1'}], text: "answer 1"});
    })
    
    cy.byId('choiceItem1/1').click().clear().type('{enter}')
    cy.window().then((win)=> {
      let bundle = win.LForms.Util.getFormFHIRData("QuestionnaireResponse","R4", null, {extract: true})
      expect(bundle.length).to.equal(2);
      expect(bundle[0].resourceType).to.equal("QuestionnaireResponse");
      expect(bundle[0].item.length).to.equal(1);
      expect(bundle[0].item[0].answer).to.eql([{valueBoolean: true}]);
      
      expect(bundle[1].resourceType).to.equal("Observation");
      expect(bundle[1].valueBoolean).to.equal(true);
    })
  });

  it('should not extract observations from hidden items', ()=> {
    cy.visit('test/pages/addFormToPageTest.html');
    util.addFormToPage('extractObs-test.R4.json', null, {fhirVersion: 'R4'});
    
    cy.byId('blItem1/1').click();
    cy.window().then((win)=> {
      let bundle = win.LForms.Util.getFormFHIRData("QuestionnaireResponse","R4", null, {extract: true})
      expect(bundle.length).to.equal(2);
      expect(bundle[0].resourceType).to.equal("QuestionnaireResponse");
      expect(bundle[0].item.length).to.equal(1);
      expect(bundle[0].item[0].answer).to.eql([{valueBoolean: false}]);
      
      expect(bundle[1].resourceType).to.equal("Observation");
      expect(bundle[1].valueBoolean).to.equal(false);
    })
  });

 
});