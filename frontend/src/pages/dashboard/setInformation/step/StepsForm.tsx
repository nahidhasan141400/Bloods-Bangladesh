/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Steps, theme } from "antd";
import PersonalInfo from "./content/PersonalInfo";
import ContactInfo from "./content/ContactInfo";
import ShowFields from "./content/ShowFields";
import { AddDonorFromI } from "../../../../Interface/Interface";

const StepsForm: React.FC = () => {
  const [personalData, setPersonalData] = useState({});
  const [contactData, setContactData] = useState({});
  const [finalData, setFinalData] = useState<AddDonorFromI | any>({});

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (personalData && contactData) {
      const data = {
        ...personalData,
        ...contactData,
      };
      setFinalData(data);
    }
  }, [personalData, contactData]);

  const steps = [
    {
      title: "Personal Information",
      content: (
        <PersonalInfo
          current={current}
          setCurrent={setCurrent}
          setData={setPersonalData}
          defaultValues={personalData}
        />
      ),
    },
    {
      title: "Contact Information",
      content: (
        <ContactInfo
          current={current}
          setCurrent={setCurrent}
          setData={setContactData}
          defaultValues={contactData}
        />
      ),
    },
    {
      title: "Review",
      content: (
        <ShowFields
          current={current}
          setCurrent={setCurrent}
          data={finalData}
        />
      ),
    },
  ];
  // const next = () => {
  //   setCurrent(current + 1);
  // };

  // const prev = () => {
  //   setCurrent(current - 1);
  // };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default StepsForm;
