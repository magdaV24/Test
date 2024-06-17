import { Company } from "../interfaces/Company";

interface Props {
  company: Company;
}

export default function CompanyCard({ company }: Props) {
  return (
    <div className="company-card">
      <div className="company-card-header">
        <p>"{company.catchPhrase}"</p>
        <p  className="company-name">~{company.name}</p>
      </div>
      <p className="company-bs">What we are all about: {company.bs}</p>
    </div>
  );
}
