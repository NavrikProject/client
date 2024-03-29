import axios from "axios";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../../utils/Loading";
import styled from "styled-components";

const RegisterFormSect = styled.section`
  height: auto;
  background-color: #fff;
  width: 100%;
`;
const RegisterFormSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 600px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
const Field = styled.div`
  height: auto;
  width: 100%;
  margin: 20px;
`;
const FormLabel = styled.label`
  font-size: 20px;
  margin: 10px auto;
  width: 100%;
  display: block;
`;
const FormSelect = styled.select`
  height: 40px;
  width: 100%;

  font-size: 18px;
  border-radius: 5px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const FormOption = styled.option``;
const Input = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  padding: 5px;

  &:focus {
    border-color: #fc83bb;
  }
`;
const FormAddress = styled.textarea`
  height: 60px;
  width: 100%;
  font-size: 19px;
`;
const NextButton = styled.button`
  height: 40px;
  width: 100%;
  outline: none;
  margin-top: 10px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  &:disabled {
    cursor: not-allowed;
  }
`;
const CloseButton = styled(AiOutlineClose)`
  font-size: 25px;
  color: #111;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 16px;
`;

const TrainerDetailForm = (props) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [experience, setExperience] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [noOfHrs, setNoOfHrs] = useState("");
  const [engType, setEngType] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [lnProfile, setLnProfile] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const firstName = user?.firstname;
  const lastName = user?.lastname;

  const additionalUpdateFormHandler = async (event) => {
    event.preventDefault();
    if (mobileNumber.length === 10) {
      setLoading(true);
      const res = await axios.put(
        `https://navriktrainingserverside.azurewebsites.net/api/trainer/profile/new/update/${user?.id}`,
        {
          experience: experience,
          mobileNumber: mobileNumber,
          skills: skills,
          qualification: qualification,
          prefTime: prefTime,
          noOfHrs: noOfHrs,
          engType: engType,
          location: location,
          lnProfile: lnProfile,
          firstName: firstName,
          lastName: lastName,
          description: description,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, {
          position: "top-center",
        });
        setLoading(false);
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, {
          position: "top-center",
        });
        setLoading(false);
      }
      setExperience("");
      setMobileNumber("");
      setPrefTime("");
      setQualification("");
      setPrefTime("");
      setEngType("");
      setNoOfHrs("");
      setSkills("");
      setDescription("");
      setLoading(false);
    } else {
      return setError(
        "Mobile number must be at least 10 characters or less than 11 characters"
      );
    }
  };
  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 9000);

  return (
    <RegisterFormSect>
      <CloseButton onClick={props.personal} />
      <RegisterFormSection>
        <h1>Technical Details update form</h1>
        <RegisterFormWrapper>
          <Form
            method="POST"
            encType="multipart/form-data"
            onSubmit={additionalUpdateFormHandler}
          >
            <Field>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
              {loading && <Loading />}
            </Field>

            <Field>
              <FormLabel>Bio</FormLabel>
              <FormAddress
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Give a brief introduction to yourself this will show in trainers page"
              ></FormAddress>
            </Field>
            <Field>
              <FormLabel>Min Years of Experience :</FormLabel>
              <Input
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                type="number"
                placeholder="Minimum 10 years of experience"
                min="8"
              />
            </Field>
            <Field>
              <FormLabel>Enter Your Mobile Number :</FormLabel>
              <Input
                name="mobile"
                onChange={(e) => setMobileNumber(e.target.value)}
                type="number"
                placeholder="Must be a valid Mobile Number"
                min="10"
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </Field>
            <Field>
              <FormLabel>Enter Skills</FormLabel>
              <FormAddress
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter your skills separated by commas"
              ></FormAddress>
            </Field>
            <Field>
              <FormLabel>Your Qualification :</FormLabel>
              <FormSelect
                name="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="graduation">Graduation</FormOption>
                <FormOption value="post-graduation">Post Graduation</FormOption>
                <FormOption value="ph-d">Ph D</FormOption>
                <FormOption value="others">Others</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Your Preference Time:</FormLabel>
              <FormSelect
                name="prefTime"
                value={prefTime}
                onChange={(e) => setPrefTime(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="morning">Morning </FormOption>
                <FormOption value="afternoon">Afternoon</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>How many hours you can teach ?</FormLabel>
              <FormSelect
                name="noOfHrs"
                value={noOfHrs}
                onChange={(e) => setNoOfHrs(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="2">2 </FormOption>
                <FormOption value="3">3</FormOption>
                <FormOption value="4">4 </FormOption>
                <FormOption value="5">5</FormOption>
                <FormOption value="6">6</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Your Engagement Type :</FormLabel>
              <FormSelect
                name="engType"
                value={engType}
                onChange={(e) => setEngType(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="part-time">Part Time </FormOption>
                <FormOption value="full-time">Full Time </FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Location :</FormLabel>
              <Input
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Enter your city name"
              />
            </Field>
            <Field>
              <FormLabel>Linked in Profile :</FormLabel>
              <Input
                name="lnProfile"
                onChange={(e) => setLnProfile(e.target.value)}
                placeholder="Paste your linked in Profile"
                type="text"
              />
            </Field>
            <Field>
              <NextButton>Submit</NextButton>
            </Field>
          </Form>
        </RegisterFormWrapper>
      </RegisterFormSection>
    </RegisterFormSect>
  );
};

export default TrainerDetailForm;
