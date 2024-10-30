import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="container min-h-screen bg-[#FFE4E6] py-12">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-16 h-16 text-text_title mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-text_title mb-4">
            Legal Disclaimer
          </h1>
          <p className="text-text_default">
            Please read this disclaimer carefully before using our AI-powered
            services
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-text_title flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Not Medical Advice
            </CardTitle>
          </CardHeader>
          <CardContent className="prose text-text_default">
            <p>
              The information provided by our AI system is for general
              informational purposes only and should not be considered as
              medical advice. This system is designed to provide general
              guidance and information but should never replace professional
              medical consultation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-text_title">Limitations of AI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-text_default">
            <p>
              While our AI system strives to provide accurate and helpful
              information, it has limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It may not account for your specific medical history</li>
              <li>It cannot perform physical examinations</li>
              <li>It may not be aware of recent medical developments</li>
              <li>It cannot make definitive medical diagnoses</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-text_title">
              Seek Professional Help
            </CardTitle>
          </CardHeader>
          <CardContent className="text-text_default">
            <p>Always consult with qualified healthcare professionals for:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Medical diagnosis</li>
              <li>Treatment recommendations</li>
              <li>Medication advice</li>
              <li>Any specific health concerns</li>
            </ul>
            <p className="mt-4 font-semibold">
              In case of a medical emergency, please contact your local
              emergency services immediately.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
