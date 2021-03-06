import { useFormik } from "formik";

function App() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      InformedConsentSignatureVerified: { chkbox: false, initials: "" },
      RNPresenceVerified: { chkbox: false, initials: "" },
      NPO: {
        chkbox: false,
        NpoInitials: "",
        NPO2: false,
        NPO4: false,
        NPO8: false,
      },
      driverWillAccompany: {
        chkbox: false,
        Patientinitials: "",
        ReleaseTo: "",
      },
      NoDriver: {
        chkbox: false,
        initials: "",
      },
      StandingOrders: {
        RnInitials: "",
      },
      IntervalAssessment: {
        PhysicianInitials: "",
      },
      IntraOperativeAssessmentTop: {
        TimeOutTime: "",
        PocedureStartTime: "",
        EndTime: "",
        Flouro: "",
        Min: "",
        vals: [
          { Time: "", BP: "", P: "", RR: "", T02: "", Initials: "" },
          { Time: "", BP: "", P: "", RR: "", T02: "", Initials: "" },
          { Time: "", BP: "", P: "", RR: "", T02: "", Initials: "" },
          { Time: "", BP: "", P: "", RR: "", T02: "", Initials: "" },
        ],
        GroundingPad: {
          timePlaced: "",
          Site: "",
          Condition: "",
          TimeRemoved: "",
          GrouningPadChecked: false,
        },
      },

      IntraOperativeAssesmentBottom: {
        TimeinRecovery: "",
        TimeDischarged: "",
        vals: [
          {
            VitalAssessment: "",
            BP: "",
            P: "",
            RR: "",
            t: "",
            T02: "",
            chkbox: false,
          },
          {
            VitalAssessment: "",
            BP: "",
            P: "",
            RR: "",
            t: "",
            T02: "",
            chkbox: false,
          },
          {
            VitalAssessment: "",
            BP: "",
            P: "",
            RR: "",
            t: "",
            T02: "",
            chkbox: false,
          },
        ],
        initials: "",
        PhysicianWhoPerformedProcedure: false,
        PhysicianSign: { chkbox: false, value: "" },
        RnSign: { chkbox: false, value: "" },
        DischargeInstruction: {
          chkbox: false,
          initials: "",
        },
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log("values", values);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="mx-40 pb-20">
          <div className="text-3xl  underline mt-5 mb-5">
            PRE-OPERATIVE ASSESSMENT:
          </div>
          <div className="grid gap-y-2">
            <div className="flex justify-between text-lg font-semibold">
              <div className="flex">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  name="InformedConsentSignatureVerified.chkbox"
                  value={values.InformedConsentSignatureVerified.chkbox}
                  onChange={handleChange}
                />
                <div className="font-normal">
                  Informed Consent Signature Verified
                </div>
              </div>
              <div className="flex">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <div className="flex">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  name="RNPresenceVerified.chkbox"
                  value={values.RNPresenceVerified.chkbox}
                  onChange={handleChange}
                />
                <div className="font-normal">RN Presence Verified</div>
              </div>
              <div className="flex">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <div className="flex ">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  name="NPO.chkbox"
                  onChange={handleChange}
                  value={values.NPO.chkbox}
                />
                <div className="font-normal ">NPO Status:</div>
                <input
                  type="checkbox"
                  className="mt-[6px] ml-10"
                  name="NPO.NPO2"
                  value={values.NPO.NPO2}
                  onChange={handleChange}
                />
                <div className="ml-2 font-normal">2hr</div>

                <input
                  type="checkbox"
                  className="mt-[6px] ml-4"
                  name="NPO.NPO4"
                  value={values.NPO.NPO4}
                  onChange={handleChange}
                />
                <div className="ml-2 font-normal">4hr</div>

                <input
                  type="checkbox"
                  className="mt-[6px] ml-4"
                  name="NPO.NPO8"
                  value={values.NPO.NPO8}
                  onChange={handleChange}
                />
                <div className="ml-2 font-normal">8hr</div>
              </div>
              <div className="flex">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
            <div className="  text-lg font-semibold">
              <div className=" flex">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  value={values.driverWillAccompany.chkbox}
                  name="driverWillAccompany.chkbox"
                  onChange={handleChange}
                />
                <div className="font-normal ">
                  Patient verifies that a driver will accompany them after the
                  procedure:
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="font-normal ml-5 ">Release to: </div>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.driverWillAccompany.ReleaseTo}
                    name="driverWillAccompany.ReleaseTo"
                    className="border-b-2 border-black focus:outline-none w-40 ml-5"
                  />
                </div>
                <div className="flex">
                  <div className="underline mr-2">Patient Initials:</div>
                  <div className="border-b-2 w-40 border-black" />
                </div>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <div className="flex">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  value={values.NoDriver.chkbox}
                  name="NoDriver.chkbox"
                  onChange={handleChange}
                />
                <div className="font-normal">No Driver Required</div>
              </div>
              <div className="flex">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
          </div>
          <div className="ml-4 text-lg">
            <div className="text-xl font-semibold   underline mt-5 mb-5">
              STANDING ORDERS:{" "}
            </div>
            <div>1. Identify Patient </div>
            <div>2. Obtain review of systems from patient </div>
            <div>3. Allergies list </div>
            <div>4. Current medication list </div>
            <div>5. Informed Consent Signed by Patient / DR / Nurse </div>
            <div>6. Valuable Secured </div>
            <div>8. NPO for 6 hours if IV sedation. </div>
            <div className="flex justify-between">
              <div>9. If pt is IM sedation: Administer Toradol 30 mg IM. </div>
              <div className="flex font-semibold">
                <div>RN Initials: </div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
          </div>
          <div className="ml-4 text-lg">
            <div className="text-xl font-semibold   underline mt-5 mb-5">
              INTERVAL ASSESSMENT:
            </div>
            <div className="font-semibold">
              Upon examination immediately before the procedure I reviewed the
              H&P and I examined the patient. I found no change in the patient???s
              condition since the H&P was completed which might be significant
              to the planned procedure. The patient continues to be appropriate
              for the planned procedure listed below in the outpatient venue.
              There are no contraindications or additional risks to the patient
              which were not identified in the H&P; therefore, we will proceed
              with the procedure as scheduled. The patient???s allergies are noted
              above and in the operative note.
            </div>
            <div className="flex mt-2 font-semibold">
              <div>OK to proceed. Physician Initials: </div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
          <div className="ml-4">
            <div className="text-xl font-semibold   underline mt-5 mb-5">
              INTRA-OPERATIVE ASSESSMENT:
            </div>
            <div className="flex mt-2 font-semibold">
              <div>TIME OUT TIME :</div>
              <input
                onChange={handleChange}
                value={values.IntraOperativeAssessmentTop.TimeOutTime}
                name="IntraOperativeAssessmentTop.TimeOutTime"
                type="text"
                className="border-b-2 border-black focus:outline-none w-40 ml-5"
              />
            </div>
            <div className="flex mt-10">
              <div className="flex mt-2 font-semibold">
                <div>PROCEDURE START TIME: </div>
                <input
                  onChange={handleChange}
                  type="text"
                  value={values.IntraOperativeAssessmentTop.PocedureStartTime}
                  name="IntraOperativeAssessmentTop.PocedureStartTime"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 font-semibold">
                <div>END TIME: </div>
                <input
                  onChange={handleChange}
                  type="text"
                  value={values.IntraOperativeAssessmentTop.EndTime}
                  name="IntraOperativeAssessmentTop.EndTime"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 font-semibold">
                <div>FLOURO:</div>
                <input
                  onChange={handleChange}
                  value={values.IntraOperativeAssessmentTop.Flouro}
                  name="IntraOperativeAssessmentTop.Flouro"
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 font-semibold">
                <div>MIN:</div>
                <input
                  onChange={handleChange}
                  value={values.IntraOperativeAssessmentTop.Min}
                  name="IntraOperativeAssessmentTop.Min"
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
            </div>
            <div className="flex mt-8 font-semibold">
              <div>GROUNDING PAD:</div>
            </div>
            <div className="flex mt-1">
              <div className="flex mt-2 ">
                <div>Time placed: </div>
                <input
                  type="text"
                  name="IntraOperativeAssessmentTop.GroundingPad.timePlaced"
                  value={
                    values.IntraOperativeAssessmentTop.GroundingPad.timePlaced
                  }
                  onChange={handleChange}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>Site: </div>
                <input
                  type="text"
                  name="IntraOperativeAssessmentTop.GroundingPad.Site"
                  value={values.IntraOperativeAssessmentTop.GroundingPad.Site}
                  onChange={handleChange}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2">
                <div>Condition:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="IntraOperativeAssessmentTop.GroundingPad.Condition"
                  value={
                    values.IntraOperativeAssessmentTop.GroundingPad.Condition
                  }
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>Time Removed:</div>
                <input
                  type="text"
                  name="IntraOperativeAssessmentTop.GroundingPad.TimeRemoved"
                  value={
                    values.IntraOperativeAssessmentTop.GroundingPad.TimeRemoved
                  }
                  onChange={handleChange}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
            </div>

            {[0, 1, 2, 3].map((d) => (
              <div className={`flex mt-4 ml-${d !== 0 ? 5 : 0}`} key={d}>
                <div className="flex mt-2 ">
                  {d === 0 && (
                    <input
                      type="checkbox"
                      className="mt-[6px] mr-2"
                      name="IntraOperativeAssessmentTop.GroundingPad.GrouningPadChecked"
                      value={
                        values.IntraOperativeAssessmentTop.GroundingPad
                          .GrouningPadChecked
                      }
                      onChange={handleChange}
                    />
                  )}
                  <div>Time: </div>
                  <input
                    type="text"
                    name={`IntraOperativeAssessmentTop.vals[${d}].Time`}
                    value={values.IntraOperativeAssessmentTop.vals[d].Time}
                    className="border-b-2 border-black focus:outline-none w-28 ml-5"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex mt-2 ">
                  <div>BP:</div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name={`IntraOperativeAssessmentTop.vals[${d}].BP`}
                    value={values.IntraOperativeAssessmentTop.vals[d].BP}
                    className="border-b-2 border-black focus:outline-none w-28 ml-5"
                  />
                </div>
                <div className="flex mt-2">
                  <div>P:</div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name={`IntraOperativeAssessmentTop.vals[${d}].P`}
                    value={values.IntraOperativeAssessmentTop.vals[d].P}
                    className="border-b-2 border-black focus:outline-none w-28 ml-5"
                  />
                </div>
                <div className="flex mt-2 ">
                  <div>RR:</div>
                  <input
                    type="text"
                    name={`IntraOperativeAssessmentTop.vals[${d}].RR`}
                    value={values.IntraOperativeAssessmentTop.vals[d].RR}
                    onChange={handleChange}
                    className="border-b-2 border-black focus:outline-none w-28 ml-5"
                  />
                </div>
                <div className="flex mt-2 ">
                  <div>02:</div>
                  <input
                    type="text"
                    name={`IntraOperativeAssessmentTop.vals[${d}].T02`}
                    value={values.IntraOperativeAssessmentTop.vals[d].T02}
                    onChange={handleChange}
                    className="border-b-2 border-black focus:outline-none w-28 ml-5"
                  />
                </div>
                <div className="flex font-semibold mt-2">
                  <div>Initials:</div>
                  <div className="border-b-2 w-40 border-black" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold   underline mt-10 mb-5">
            INTRA-OPERATIVE ASSESSMENT:
          </div>
          <div className="flex mt-4 font-semibold">
            <div className="flex mt-2 ">
              <div>Time in Recovery: </div>
              <input
                type="text"
                value={values.IntraOperativeAssesmentBottom.TimeinRecovery}
                name="IntraOperativeAssesmentBottom.TimeinRecovery"
                onChange={handleChange}
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>Time Discharged: </div>
              <input
                type="text"
                value={values.IntraOperativeAssesmentBottom.TimeDischarged}
                name="IntraOperativeAssesmentBottom.TimeDischarged"
                onChange={handleChange}
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
          </div>
          {[0, 1, 2].map((d) => (
            <div className="flex mt-4" key={d}>
              <div className="flex mt-2 ">
                <input
                  type="checkbox"
                  className="mt-[6px] mr-2"
                  name={`IntraOperativeAssesmentBottom.vals[${d}].chkbox`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].chkbox}
                  onChange={handleChange}
                />
                <div> Vital Assessment </div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].VitalAssessment`}
                  value={
                    values.IntraOperativeAssesmentBottom.vals[d].VitalAssessment
                  }
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>BP:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].BP`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].BP}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2">
                <div>P:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].P`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].P}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>RR:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].RR`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].RR}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>t:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].t`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].t}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>02:</div>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`IntraOperativeAssesmentBottom.vals[${d}].T02`}
                  value={values.IntraOperativeAssesmentBottom.vals[d].T02}
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
            </div>
          ))}

          <div className="flex font-semibold mt-2">
            <div>Initials:</div>
            <div className="border-b-2 w-40 border-black" />
          </div>

          <div className="flex mt-10">
            <input
              type="checkbox"
              className="mt-[6px] mr-2"
              name="IntraOperativeAssesmentBottom
                  .PhysicianWhoPerformedProcedure"
              value={
                values.IntraOperativeAssesmentBottom
                  .PhysicianWhoPerformedProcedure
              }
              onChange={handleChange}
            />
            <div className="font-normal">
              Physician who performed procedure has reviewed the patient???s chart
              and performed discharge assessment. Patient cleared for discharge.
              Patient may resume any medications taken prior to procedure.{" "}
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              className="mt-[14px] mr-2"
              onChange={handleChange}
              name="IntraOperativeAssesmentBottom.PhysicianSign.chkbox"
              value={values.IntraOperativeAssesmentBottom.PhysicianSign.chkbox}
            />
            <div className="flex font-semibold mt-2">
              <div> Physician Signature:</div>
              <div className="border-b-2 w-96 border-black" />
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              className="mt-[14px] mr-2"
              name="IntraOperativeAssesmentBottom.RnSign.chkbox"
              value={values.IntraOperativeAssesmentBottom.RnSign.chkbox}
              onChange={handleChange}
            />
            <div className="flex font-semibold mt-2">
              <div> RNSignature:</div>
              <div className="border-b-2 w-96 border-black" />
            </div>
          </div>

          <div className="flex justify-between text-lg mt-4 font-semibold">
            <div className="flex">
              <input
                type="checkbox"
                className="mt-[6px] mr-2"
                onChange={handleChange}
                name="IntraOperativeAssesmentBottom.DischargeInstruction
                    .chkbox"
                value={
                  values.IntraOperativeAssesmentBottom.DischargeInstruction
                    .chkbox
                }
              />
              <div className="font-normal">
                Discharge instruction sheet given
              </div>
            </div>
            <div className="flex">
              <div>Initials:</div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
