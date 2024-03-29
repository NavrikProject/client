import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrainerForm2 from "./TrainerForm2.js";
import Form3 from "../../Forms/ProfileForm/Form3.js";
import GoToTop from "../../GoToTop.js";
import Model from "./Model";
import TrainerDetailForm from "./TrainerProfileDetailForm.js";
import {
  DetailsFlex,
  DetailsFlex1,
  DetailsFromDb,
  DetailsTitles,
  Img,
  ImgBox,
  LinkedInIcon,
  NextButton,
  TrainerFlex,
  TrainerLeftCol,
  TrainerLi,
  TrainerRightCol,
  TrainerRole,
  TrainerSect,
  TrainerTitle,
  TrainerUl,
  TrainerWrapper,
} from "./TrainerProfileFormElements.js";
import TrainerImageForm from "./TrainerImageForm.js";
import TrainerProfileUpdateForm from "./TrainerProfileUpdateForm.js";
import BankDetails from "./BankDetails.js";
import Loading from "../../utils/Loading.js";
const Trainer = () => {
  const [personalForm, setPersonalForm] = useState(false);
  const [additionalForm, setAdditionalForm] = useState(false);
  const [accountForm, setAccountForm] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState(false);
  const [changeImageForm, setChangeImageForm] = useState(false);
  const [trainerDetails, setTrainerDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.currentUser);

  const showPersonalForm = () => {
    setPersonalForm(!personalForm);
    setAccountForm(false);
    setChangePasswordForm(false);
    setDeleteAccountForm(false);
    setChangeImageForm(false);
  };
  const showAdditionalForm = () => {
    setAdditionalForm(!additionalForm);
    setPersonalForm(false);
    setAccountForm(false);
    setChangePasswordForm(false);
    setDeleteAccountForm(false);
    setChangeImageForm(false);
  };
  const showAccountForm = () => {
    setAccountForm(!accountForm);
    setPersonalForm(false);
    setDeleteAccountForm(false);
    setChangePasswordForm(false);
    setChangeImageForm(false);
  };
  const showPasswordForm = () => {
    setChangePasswordForm(!changePasswordForm);
    setPersonalForm(false);
    setAccountForm(false);
    setDeleteAccountForm(false);
    setChangeImageForm(false);
  };
  const showBankAccountForm = () => {
    setAccountForm(false);
    setDeleteAccountForm(!deleteAccountForm);
    setPersonalForm(false);
    setChangePasswordForm(false);
    setChangeImageForm(false);
  };
  const showImageForm = () => {
    setChangeImageForm(!changeImageForm);
    setAccountForm(false);
    setDeleteAccountForm(false);
    setPersonalForm(false);
    setChangePasswordForm(false);
  };

  useEffect(() => {
    const getTrainerProfileDetails = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://navriktrainingserverside.azurewebsites.net/api/trainer/profile/new/get/${user?.id}`,
        {
          headers: { authorization: "Bearer " + user.accessToken },
        }
      );
      if(res.data.notfound){
      setLoading(false);
      setPersonalForm(false);
      }else{
      setTrainerDetails(res.data);
      setLoading(false);
      setPersonalForm(false);
      }
    };
    getTrainerProfileDetails();
  }, [user.id, user.accessToken]);
  return (
    <TrainerSect>
      <TrainerWrapper>
        <TrainerFlex>
          <TrainerLeftCol>
            <h1>Update Your details Here</h1>
            <TrainerUl>
              <TrainerLi onClick={showPersonalForm}>
                Technical Details
              </TrainerLi>
              <TrainerLi onClick={showAccountForm}>Account</TrainerLi>
              <TrainerLi onClick={showImageForm}>
                Change Profile Picture
              </TrainerLi>
              <TrainerLi onClick={showPasswordForm}>Change Password</TrainerLi>
              <TrainerLi onClick={showBankAccountForm}>
                Bank Account Details
              </TrainerLi>
              <TrainerLi>Your Earnings</TrainerLi>
              <TrainerLi>Your courses</TrainerLi>
              <TrainerLi onClick={showAdditionalForm}>
                Additional Details
              </TrainerLi>
              {additionalForm ? (
                <Model>
                  <TrainerDetailForm personal={showAdditionalForm} />
                </Model>
              ) : (
                ""
              )}
              {personalForm ? (
                <Model>
                  <TrainerProfileUpdateForm personal={showPersonalForm} />
                </Model>
              ) : (
                ""
              )}
              {accountForm ? (
                <Model>
                  <TrainerForm2 personal={showAccountForm} />
                </Model>
              ) : (
                ""
              )}
              {changePasswordForm ? (
                <Model>
                  <Form3 personal={showPasswordForm} />
                </Model>
              ) : (
                ""
              )}
              {deleteAccountForm ? (
                <Model>
                  <BankDetails personal={showBankAccountForm} />
                </Model>
              ) : (
                ""
              )}
              {changeImageForm ? (
                <Model>
                  <TrainerImageForm personal={showImageForm} />
                </Model>
              ) : (
                ""
              )}
            </TrainerUl>
          </TrainerLeftCol>
          <TrainerRightCol>
            {trainerDetails?.length > 0 ? (
              trainerDetails?.map((trainer) => (
                <>
                  <ImgBox>
                    <div>
                      <TrainerTitle>
                        {user.firstname + " " + user.lastname}
                      </TrainerTitle>
                      <TrainerRole>
                        <b>Role : </b> {user.type}
                      </TrainerRole>
                    </div>
                    <Img src={trainer.trainer_image} />
                  </ImgBox>
                  <DetailsFlex>
                    <DetailsFlex1>
                      <DetailsTitles>Your Email : </DetailsTitles>
                      <DetailsFromDb>{trainer.trainer_email}</DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Your Mobile : </DetailsTitles>
                      <DetailsFromDb>{trainer.trainer_mobile}</DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Hours of Teach: </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_no_of_hrs_daily}hrs Daily
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Experience : </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_exp_yrs} Year's
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Qualifications : </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_qualifications}
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Preferred Timings : </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_pref_time} time
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Engagement Type: </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_engment_typ} time
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Skills </DetailsTitles>
                      <DetailsFromDb>{trainer.trainer_skills}</DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Description: </DetailsTitles>
                      <DetailsFromDb>
                        {trainer.trainer_description}
                      </DetailsFromDb>
                    </DetailsFlex1>
                    <DetailsFlex1>
                      <DetailsTitles>Social Links </DetailsTitles>
                      <DetailsFromDb>
                        <a
                          target={`_blank`}
                          style={{ textDecoration: "none" }}
                          href={`www.google.com`}
                        >
                          <LinkedInIcon />
                        </a>
                      </DetailsFromDb>
                    </DetailsFlex1>
                  </DetailsFlex>
                </>
              ))
            ) : (
              <>
                {loading ? (
                  <Loading />
                ) : (
                  <NextButton onClick={showAdditionalForm}>
                    Additional Trainer Details
                  </NextButton>
                )}
              </>
            )}
          </TrainerRightCol>
        </TrainerFlex>
      </TrainerWrapper>
      <GoToTop />
    </TrainerSect>
  );
};

export default Trainer;
