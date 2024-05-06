import React, { useEffect, useState } from "react";
import CompanyPageStyled from "./CompanyPageStyled";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface CompanyPageProps {}

const CompanyPage: React.FC<CompanyPageProps> = (
  props: CompanyPageProps
): JSX.Element => {
  let { symbol } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(symbol!);
      setCompany(result?.data);

      console.log(result);
    };

    getProfileInit();
  }, [symbol]);
  return (
    <CompanyPageStyled>
      {company ? (
        <div className="companyName">{company.name}</div>
      ) : (
        <div>Please wait...</div>
      )}
    </CompanyPageStyled>
  );
};

export default CompanyPage;
