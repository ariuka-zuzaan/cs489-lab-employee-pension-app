export class PensionPlan {
  planReferenceNumber: string;
  enrollmentDate: Date | null;
  monthlyContribution: number | null;

  constructor(planReferenceNumber: string, enrollmentDate: Date | null, monthlyContribution: number | null) {
    this.planReferenceNumber = planReferenceNumber;
    this.enrollmentDate = enrollmentDate;
    this.monthlyContribution = monthlyContribution;
  }
}
