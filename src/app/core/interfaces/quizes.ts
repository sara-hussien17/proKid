export interface Quizes {
 id: number;
  content: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  explanation: string;
  videoId: number;
  // الخاصية دي مش جاية من الـ API، هنستخدمها للتعامل مع اختيار المستخدم
  allAnswers?: string[]; // هنجمع فيها كل الإجابات ونخلطهم
  selectedAnswer?: string; 
  allOptions?:string;

}
