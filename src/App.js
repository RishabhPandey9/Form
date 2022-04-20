function App() {
  return (
    <>
      <div className="mx-40 pb-20">
        <div className="text-3xl  underline mt-5 mb-5">
          PRE-OPERATIVE ASSESSMENT:
        </div>
        <div className="grid gap-y-2">
          <div className="flex justify-between text-lg font-semibold">
            <div className="flex">
              <input type="checkbox" className="mt-[6px] mr-2" />
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
              <input type="checkbox" className="mt-[6px] mr-2" />
              <div className="font-normal">RN Presence Verified</div>
            </div>
            <div className="flex">
              <div>Initials:</div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <div className="flex ">
              <input type="checkbox" className="mt-[6px] mr-2" />
              <div className="font-normal ">NPO Status:</div>
              <input type="checkbox" className="mt-[6px] ml-10" />
              <div className="ml-2 font-normal">2hr</div>

              <input type="checkbox" className="mt-[6px] ml-4" />
              <div className="ml-2 font-normal">4hr</div>

              <input type="checkbox" className="mt-[6px] ml-4" />
              <div className="ml-2 font-normal">8hr</div>
            </div>
            <div className="flex">
              <div>Initials:</div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
          <div className="  text-lg font-semibold">
            <div className=" flex">
              <input type="checkbox" className="mt-[6px] mr-2" />
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
              <input type="checkbox" className="mt-[6px] mr-2" />
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
            Upon examination immediately before the procedure I reviewed the H&P
            and I examined the patient. I found no change in the patient’s
            condition since the H&P was completed which might be significant to
            the planned procedure. The patient continues to be appropriate for
            the planned procedure listed below in the outpatient venue. There
            are no contraindications or additional risks to the patient which
            were not identified in the H&P; therefore, we will proceed with the
            procedure as scheduled. The patient’s allergies are noted above and
            in the operative note.
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
              type="text"
              className="border-b-2 border-black focus:outline-none w-40 ml-5"
            />
          </div>
          <div className="flex mt-10">
            <div className="flex mt-2 font-semibold">
              <div>PROCEDURE START TIME: </div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 font-semibold">
              <div>END TIME: </div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 font-semibold">
              <div>FLOURO:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 font-semibold">
              <div>MIN:</div>
              <input
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
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>Site: </div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2">
              <div>Condition:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>Time Removed:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex mt-2 ">
              <input type="checkbox" className="mt-[6px] mr-2" />
              <div>Time: </div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>BP:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2">
              <div>P:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>RR:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex mt-2 ">
              <div>02:</div>
              <input
                type="text"
                className="border-b-2 border-black focus:outline-none w-28 ml-5"
              />
            </div>
            <div className="flex font-semibold mt-2">
              <div>Initials:</div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
          <div className="ml-5">
            <div className="flex mt-4">
              <div className="flex mt-2 ">
                <div>Time: </div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>BP:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2">
                <div>P:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>RR:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>02:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex font-semibold mt-2">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex mt-2 ">
                <div>Time: </div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>BP:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2">
                <div>P:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>RR:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>02:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex font-semibold mt-2">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex mt-2 ">
                <div>Time: </div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>BP:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2">
                <div>P:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>RR:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex mt-2 ">
                <div>02:</div>
                <input
                  type="text"
                  className="border-b-2 border-black focus:outline-none w-28 ml-5"
                />
              </div>
              <div className="flex font-semibold mt-2">
                <div>Initials:</div>
                <div className="border-b-2 w-40 border-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold   underline mt-10 mb-5">
          INTRA-OPERATIVE ASSESSMENT:
        </div>
        <div className="flex mt-4 font-semibold">
          <div className="flex mt-2 ">
            <div>Time in Recovery: </div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>Time Discharged: </div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex mt-2 ">
            <input type="checkbox" className="mt-[6px] mr-2" />
            <div> Vital Assessment </div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>BP:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2">
            <div>P:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>RR:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>t:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>02:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex mt-2 ">
            <input type="checkbox" className="mt-[6px] mr-2" />
            <div> Vital Assessment </div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>BP:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2">
            <div>P:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>RR:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>t:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>02:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex mt-2 ">
            <input type="checkbox" className="mt-[6px] mr-2" />
            <div> Vital Assessment </div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>BP:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2">
            <div>P:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>RR:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>t:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
          <div className="flex mt-2 ">
            <div>02:</div>
            <input
              type="text"
              className="border-b-2 border-black focus:outline-none w-28 ml-5"
            />
          </div>
        </div>
        <div className="flex font-semibold mt-2">
          <div>Initials:</div>
          <div className="border-b-2 w-40 border-black" />
        </div>

        <div className="flex mt-10">
          <input type="checkbox" className="mt-[6px] mr-2" />
          <div className="font-normal">
            Physician who performed procedure has reviewed the patient’s chart
            and performed discharge assessment. Patient cleared for discharge.
            Patient may resume any medications taken prior to procedure.{" "}
          </div>
        </div>
        <div className="flex mt-5">
          <input type="checkbox" className="mt-[14px] mr-2" />
          <div className="flex font-semibold mt-2">
          <div>	Physician Signature:</div>
          <div className="border-b-2 w-96 border-black" />
        </div>
        </div>
        <div className="flex mt-5">
          <input type="checkbox" className="mt-[14px] mr-2" />
          <div className="flex font-semibold mt-2">
          <div>	RNSignature:</div>
          <div className="border-b-2 w-96 border-black" />
        </div>
        </div>
         
         
          <div className="flex justify-between text-lg mt-4 font-semibold">
            <div className="flex">
              <input type="checkbox" className="mt-[6px] mr-2" />
              <div className="font-normal">Discharge instruction sheet given</div>
            </div>
            <div className="flex">
              <div>Initials:</div>
              <div className="border-b-2 w-40 border-black" />
            </div>
          </div>
        
      </div>
    </>
  );
}

export default App;
