// Service banner images
import serviceItStaffing from "@/assets/service-it-staffing.jpg";
import serviceNonIt from "@/assets/service-non-it-staffing.jpg";
import serviceHealthcare from "@/assets/service-healthcare.jpg";
import serviceMechanical from "@/assets/service-mechanical.jpg";
import servicePharmaceutical from "@/assets/service-pharmaceutical.jpg";
import serviceAerospace from "@/assets/service-aerospace.jpg";
import serviceFederal from "@/assets/service-federal.jpg";
import servicePayroll from "@/assets/service-payroll.jpg";
import serviceContractor from "@/assets/service-contractor.jpg";
import serviceBenchSales from "@/assets/service-bench-sales.jpg";
import serviceOnboarding from "@/assets/service-onboarding.jpg";
import serviceExit from "@/assets/service-exit.jpg";

// Industry banner images
import industryIt from "@/assets/industry-it.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryFinance from "@/assets/industry-finance.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import industryTelecom from "@/assets/industry-telecom.jpg";
import industryAerospace from "@/assets/industry-aerospace.jpg";

export const serviceImages: Record<string, string> = {
  "it-staffing-solutions": serviceItStaffing,
  "non-it-corporate-staffing": serviceNonIt,
  "healthcare-staffing": serviceHealthcare,
  "mechanical-engineering-staffing": serviceMechanical,
  "pharmaceutical-life-sciences": servicePharmaceutical,
  "aerospace-specialized-hiring": serviceAerospace,
  "federal-government-staffing": serviceFederal,
  "payroll-workforce-management": servicePayroll,
  "contractor-c2c-services": serviceContractor,
  "bench-sales-candidate-marketing": serviceBenchSales,
  "onboarding-documentation": serviceOnboarding,
  "exit-full-final-services": serviceExit,
};

export const industryImages: Record<string, string> = {
  "information-technology": industryIt,
  "healthcare": industryHealthcare,
  "banking-financial-services": industryFinance,
  "manufacturing": industryManufacturing,
  "energy-utilities": industryEnergy,
  "retail-ecommerce": industryRetail,
  "telecommunications": industryTelecom,
  "aerospace-defense": industryAerospace,
};
