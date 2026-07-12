import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

/**
 * Online version of the school's "2026 Admission Form" PDF.
 * Submits to Formspree — swap the endpoint below for the school's real form ID.
 * Sign up at https://formspree.io, create a form, and paste its ID here.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojgqazw';

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  className = ''
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-charcoal/80 mb-1.5">
        {label}
        {required && <span className="text-royal ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone bg-cloud/40 px-4 py-2.5 text-charcoal placeholder:text-charcoal/30 focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-colors" />
    </div>);
}

function Select({
  label,
  name,
  options,
  required = false,
  className = ''
}: {label: string;name: string;options: string[];required?: boolean;className?: string;}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-charcoal/80 mb-1.5">
        {label}
        {required && <span className="text-royal ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-stone bg-cloud/40 px-4 py-2.5 text-charcoal focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-colors">
        <option value="" disabled>
          Please select…
        </option>
        {options.map((opt) =>
        <option key={opt} value={opt}>
            {opt}
          </option>
        )}
      </select>
    </div>);
}

function Section({
  title,
  letter,
  children,
  note
}: {title: string;letter: string;children: React.ReactNode;note?: string;}) {
  return (
    <fieldset className="border-t border-stone pt-8">
      <legend className="flex items-center gap-3 mb-1">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-royal text-white font-serif text-sm shrink-0">
          {letter}
        </span>
        <h3 className="font-serif text-2xl text-forestGreen">{title}</h3>
      </legend>
      {note && <p className="text-sm text-charcoal/60 mb-6 ml-11">{note}</p>}
      <div className={note ? '' : 'mt-6'}>{children}</div>
    </fieldset>);
}

export function ApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        window.scrollTo({ top: document.getElementById('apply')?.offsetTop, behavior: 'smooth' });
      } else {
        const data = await response.json().catch(() => null);
        setErrorMsg(
          data?.errors?.map((err: {message: string;}) => err.message).join(', ') ||
          'Something went wrong. Please try again or email the admissions office directly.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMsg(
        'Could not reach the server. Please check your connection and try again, or email the admissions office directly.'
      );
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section id="apply" className="py-24 md:py-32 bg-ivory scroll-mt-24">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-charcoal/5 border border-stone">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-royal/10 mb-6">
              <CheckCircle2 className="w-9 h-9 text-royal" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-forestGreen mb-4">
              Application Received
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Thank you for applying to Crystal Trust School. Our admissions
              office will review your application and be in touch shortly. If you
              have any questions in the meantime, please contact us directly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-forestGreen text-white rounded-full font-medium hover:bg-deepEmerald transition-colors">
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </section>);
  }

  return (
    <section id="apply" className="py-24 md:py-32 bg-ivory scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Apply Online
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen mb-4">
            2026 Admission Form
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Complete the form below to begin your child's enrolment. Fields
            marked with an asterisk (<span className="text-royal">*</span>) are
            required. Our admissions team will contact you once your application
            has been received.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl shadow-charcoal/5 border border-stone space-y-10">

          {/* A. Pupil Details */}
          <Section letter="A" title="Pupil Details">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Surname" name="pupil_surname" required />
              <Field label="Official Forenames" name="pupil_forenames" required />
              <Field label="Date of Birth" name="pupil_dob" type="date" required />
              <Field label="Birth Certificate No." name="pupil_birth_cert" />
              <Select label="Gender" name="pupil_gender" required options={['Male', 'Female']} />
              <Field label="Grade Applied For" name="grade_applied" required placeholder="e.g. Grade 1, ECD A" />
              <Select
                label="Race"
                name="pupil_race"
                options={['African', 'Asian', 'Coloured', 'European']} />
              <Field label="Preferred Date of Entry" name="date_of_entry" type="date" />
              <Field
                label="Name of Previous School"
                name="previous_school"
                className="sm:col-span-2"
                placeholder="If applicable" />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-charcoal/80 mb-1.5">
                Sibling(s) already at Crystal Trust
              </label>
              <textarea
                name="siblings"
                rows={2}
                placeholder="Name — Date of Birth — Grade (one per line, if applicable)"
                className="w-full rounded-xl border border-stone bg-cloud/40 px-4 py-2.5 text-charcoal placeholder:text-charcoal/30 focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-colors" />
            </div>
          </Section>

          {/* B. Medical Information */}
          <Section letter="B" title="Medical Information">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Family Doctor" name="doctor_name" />
              <Field label="Doctor's Telephone No." name="doctor_phone" type="tel" />
              <Field label="Medical Aid Society" name="medical_aid_society" />
              <div className="grid grid-cols-2 gap-5">
                <Field label="Medical Aid No." name="medical_aid_no" />
                <Field label="Suffix No." name="medical_aid_suffix" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal/80 mb-1.5">
                  Any allergies or medical problems
                </label>
                <textarea
                  name="medical_notes"
                  rows={3}
                  className="w-full rounded-xl border border-stone bg-cloud/40 px-4 py-2.5 text-charcoal focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-colors" />
              </div>
            </div>
          </Section>

          {/* C. Family Details */}
          <Section letter="C" title="Family Details">
            <div className="grid sm:grid-cols-2 gap-5">
              <Select
                label="Marital Status of Parents"
                name="marital_status"
                options={[
                'Married',
                'Divorced',
                'Remarried',
                'Separated',
                'Widowed',
                'Single',
                'Engaged',
                'Other']
                } />
              <Field label="Home Language" name="home_language" />
              <Field label="Religion" name="religion" />
            </div>
          </Section>

          {/* D. Home Details */}
          <Section letter="D" title="Home Details">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Home Address" name="home_address" required className="sm:col-span-2" />
              <Field label="Home Telephone" name="home_phone" type="tel" />
              <Field label="Cell" name="home_cell" type="tel" required />
              <Field label="E-mail" name="home_email" type="email" required className="sm:col-span-2" />
            </div>
          </Section>

          {/* E. Father's Details */}
          <Section letter="E" title="Father's Details">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Surname" name="father_surname" />
              <Field label="Forename/s" name="father_forenames" />
              <Field label="Nationality" name="father_nationality" />
              <Field label="Home Address (if different)" name="father_address" />
              <Field label="Occupation" name="father_occupation" />
              <Field label="Company Name" name="father_company" />
              <Field label="Business Address" name="father_business_address" className="sm:col-span-2" />
              <Field label="Business Telephone" name="father_business_phone" type="tel" />
              <Field label="Cell" name="father_cell" type="tel" />
              <Field label="E-mail" name="father_email" type="email" className="sm:col-span-2" />
            </div>
          </Section>

          {/* F. Mother's Details */}
          <Section letter="F" title="Mother's Details">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Surname" name="mother_surname" />
              <Field label="Forenames" name="mother_forenames" />
              <Field label="Nationality" name="mother_nationality" />
              <Field label="Home Address (if different)" name="mother_address" />
              <Field label="Occupation" name="mother_occupation" />
              <Field label="Company Name" name="mother_company" />
              <Field label="Business Address" name="mother_business_address" className="sm:col-span-2" />
              <Field label="Business Telephone" name="mother_business_phone" type="tel" />
              <Field label="Cell" name="mother_cell" type="tel" />
              <Field label="E-mail" name="mother_email" type="email" className="sm:col-span-2" />
            </div>
          </Section>

          {/* G. Invoicing Details */}
          <Section
            letter="G"
            title="Invoicing Details"
            note="Person responsible for payment of school fees.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Surname" name="invoice_surname" required />
              <Field label="Initials" name="invoice_initials" />
              <Select
                label="Title"
                name="invoice_title"
                options={['Mr', 'Mrs', 'Miss', 'Ms', 'Rev', 'Doc']} />
              <Field label="Cell No." name="invoice_cell" type="tel" required />
              <Field label="Personal E-mail" name="invoice_email" type="email" required className="sm:col-span-2" />
            </div>
          </Section>

          {/* H. Emergency Contacts */}
          <Section
            letter="H"
            title="Emergency Contacts"
            note="People willing and able to collect and care for your child at short notice if the school cannot reach a parent.">
            <div className="space-y-8">
              {[1, 2].map((n) =>
              <div key={n}>
                  <p className="font-medium text-forestGreen mb-4">Contact #{n}</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name={`emergency${n}_name`} required={n === 1} />
                    <Field label="Relationship to Family" name={`emergency${n}_relationship`} required={n === 1} />
                    <Field label="Home Telephone" name={`emergency${n}_home_phone`} type="tel" />
                    <Field label="Business Telephone" name={`emergency${n}_bus_phone`} type="tel" />
                    <Field label="Cell" name={`emergency${n}_cell`} type="tel" required={n === 1} />
                  </div>
                </div>
              )}
            </div>
          </Section>

          {/* Declarations */}
          <Section
            letter="I"
            title="Declaration & Consent"
            note="Crystal Trust School is a Christian school. Please read the full Code of Discipline, Declaration, Co-curricular and Indemnity terms provided with the printed admission pack before confirming below.">
            <div className="space-y-4">
              <label className="flex items-start gap-3 p-4 rounded-xl bg-cloud/40 border border-stone cursor-pointer hover:bg-cloud transition-colors">
                <input
                  type="checkbox"
                  name="declaration_agreed"
                  required
                  value="Yes"
                  className="mt-1 w-4 h-4 accent-royal shrink-0" />
                <span className="text-sm text-charcoal/80 leading-relaxed">
                  I confirm that Crystal Trust School is a Christian school and
                  that my child will be taught the tenets of the Christian faith.
                  I understand and agree to the school's Declaration, including
                  the fees, registration, withdrawal-notice and enrolment terms,
                  and consent to the jurisdiction of the Magistrate's Court of
                  Zimbabwe as set out in the admission form.
                  <span className="text-royal ml-0.5">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 p-4 rounded-xl bg-cloud/40 border border-stone cursor-pointer hover:bg-cloud transition-colors">
                <input
                  type="checkbox"
                  name="cocurricular_agreed"
                  required
                  value="Yes"
                  className="mt-1 w-4 h-4 accent-royal shrink-0" />
                <span className="text-sm text-charcoal/80 leading-relaxed">
                  I understand that attendance at co-curricular activities and
                  school fixtures carries the same priority as lessons, and I
                  will ensure my child is equipped for and attends their
                  co-curricular and other school responsibilities.
                  <span className="text-royal ml-0.5">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 p-4 rounded-xl bg-cloud/40 border border-stone cursor-pointer hover:bg-cloud transition-colors">
                <input
                  type="checkbox"
                  name="indemnity_agreed"
                  required
                  value="Yes"
                  className="mt-1 w-4 h-4 accent-royal shrink-0" />
                <span className="text-sm text-charcoal/80 leading-relaxed">
                  I have read and accept the Indemnity, and unconditionally
                  indemnify and hold harmless the school, its board, employees
                  and authorised agents against loss or injury as set out in the
                  admission form.
                  <span className="text-royal ml-0.5">*</span>
                </span>
              </label>

              <div className="grid sm:grid-cols-2 gap-5 pt-2">
                <Field
                  label="Full Name of Parent / Guardian"
                  name="signatory_name"
                  required
                  placeholder="Typed name acts as your signature" />
                <Field label="Date" name="signatory_date" type="date" required />
              </div>
            </div>
          </Section>

          {status === 'error' &&
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          }

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-forestGreen text-white rounded-full font-medium hover:bg-deepEmerald transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'submitting' ?
              <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting…
                </> :

              'Submit Application'
              }
            </button>
            <p className="text-xs text-charcoal/50 mt-4">
              By submitting, you confirm the information provided is accurate to
              the best of your knowledge.
            </p>
          </div>
        </motion.form>
      </div>
    </section>);
}
