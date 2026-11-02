import type { ReactNode } from "react";

import type { EmergencyProfileData } from "../lib/demo-profile";

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
        <span className="text-lg">{icon}</span>
        {label}
      </div>
      {children}
    </div>
  );
}

export function EmergencyProfile({ patient }: { patient: EmergencyProfileData }) {
  const normalizedPhone = patient.contactPhone?.replace(/[\s()-]/g, "") ?? "";
  const contactPhone = /^\+[1-9]\d{6,14}$/.test(normalizedPhone)
    ? normalizedPhone
    : null;
  const initials = patient.name.split(/\s+/).filter(Boolean).slice(0, 2)
    .map((part) => part[0]).join("");
  const updatedDate = patient.updatedAt ? new Date(`${patient.updatedAt}T00:00:00Z`) : null;
  const hasUpdatedDate = updatedDate !== null && !Number.isNaN(updatedDate.getTime());
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">

        {/* Brand */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-xl text-white">
              +
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">EMIS</p>
              <p className="text-xs text-slate-500">
                Emergency Medical Information System
              </p>
            </div>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            QR / NFC planned
          </span>
        </header>

        {/* Patient hero */}
        <section className="rounded-3xl bg-[#10243B] p-6 text-white shadow-lg sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-200">
              Emergency medical profile
            </span>
            <span className="text-xs text-slate-300">
              DEMO
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl font-bold">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">
                {patient.name}
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                Emergency medical information
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-slate-200">
            Public emergency information only.
            Details are self-reported and not medically verified.
          </div>
        </section>

        {/* Allergies */}
        <section className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-xl">
              ⚠️
            </div>
            <div>
              <h2 className="text-lg font-bold text-red-900">
                Critical Allergies
              </h2>
              <p className="text-sm text-red-700">
                Important emergency information
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {patient.allergies.length ? patient.allergies.map((allergy) => (
              <span
                key={allergy}
                className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-800"
              >
                {allergy}
              </span>
            )) : <p className="text-red-900">Allergy information not provided.</p>}
          </div>

          <p className="mt-4 text-sm text-red-800">
            These allergies are self-reported.
            Seek professional medical assistance in an emergency.
          </p>
        </section>

        {/* Medical overview */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InfoCard icon="" label="Blood Type">
            <p className="text-3xl font-bold">{patient.bloodType || "Not provided"}</p>
            <p className="mt-1 text-xs text-slate-500">
              Self-reported — not verified for transfusion
            </p>
          </InfoCard>

          <InfoCard icon="" label="Medical Conditions">
            <p className="text-xl font-semibold">
              {patient.conditions.length ? patient.conditions.join(", ") : "Not provided"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Reported health conditions
            </p>
          </InfoCard>
        </div>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Current Medications</h2>
          <p className="mt-3 text-slate-700">
            {patient.medications?.length
              ? patient.medications.join(", ")
              : "Medication information not provided."}
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Missing information does not mean no medications are taken.
          </p>
        </section>

        {/* Emergency contact */}
        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <span className="text-xl">📞</span>
            <h2 className="text-lg font-bold">Emergency Contact</h2>
          </div>

          <p className="font-semibold">{patient.contactName || "Contact not provided"}</p>
          <p className="mt-1 text-sm text-slate-500">
            {patient.contactRelationship || "Relationship not provided"}
          </p>

          {contactPhone ? (
            <a
              href={`tel:${contactPhone}`}
              className="mt-5 flex items-center justify-center rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              Call {contactPhone}
            </a>
          ) : (
            <>
              <button
                type="button"
                disabled
                className="mt-5 w-full rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-600"
              >
                Contact number unavailable
              </button>
              <p className="mt-2 text-sm text-slate-600">
                No callable contact number is configured for this demo.
              </p>
            </>
          )}
        </section>

        {/* Emergency services */}
        <section className="mt-6 rounded-2xl bg-red-600 p-6 text-center text-white shadow-sm">
          <h2 className="text-xl font-bold">Need Emergency Help?</h2>
          <p className="mt-2 text-sm text-red-50">
            If someone is in immediate danger, contact emergency services.
          </p>

          <a
            href="tel:112"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-lg font-bold text-red-700 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            ☎ Call 112
          </a>

          <p className="mt-3 text-xs text-red-100">
            Emergency number for Kazakhstan.
            Opens your device&apos;s phone dialer.
          </p>
        </section>

        <p className="mt-6 text-center text-sm text-slate-600">
          {hasUpdatedDate ? (
            <>Demo record updated: <time dateTime={patient.updatedAt!}>
              {updatedDate.toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
              })}
            </time>. This is a fixture date, not a verified medical update.</>
          ) : "Demo record update date not provided."}
        </p>

        {/* Disclaimer */}
        <footer className="mt-8 text-center text-xs leading-5 text-slate-500">
          <p>
            EMIS — Emergency Medical Information System
          </p>
          <p className="mt-2">
            Prototype using fictional data.
            Not a substitute for professional medical assessment.
          </p>
        </footer>
      </div>
    </main>
  );
}
