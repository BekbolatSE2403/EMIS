export type EmergencyProfileData = {
  name: string;
  bloodType: string | null;
  conditions: readonly string[];
  allergies: readonly string[];
  medications: readonly string[] | null;
  contactName: string | null;
  contactRelationship: string | null;
  contactPhone: string | null;
  updatedAt: string | null;
};

// Fictional fixture only. Do not add a real person's health or contact details.
export const demoProfile: EmergencyProfileData = {
  name: "Alex Morgan",
  bloodType: "B+",
  conditions: ["Asthma"],
  allergies: ["Peanuts", "Penicillin"],
  medications: null,
  contactName: "Jamie Morgan",
  contactRelationship: "Demo contact",
  contactPhone: null,
  updatedAt: "2026-11-02",
};
