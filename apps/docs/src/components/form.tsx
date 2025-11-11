'use client';

import { useState } from 'react';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

// Individual imports from rizzui
import { Input } from 'rizzui/input';
import { Textarea } from 'rizzui/textarea';
import { Password } from 'rizzui/password';
import { Select, type SelectOption } from 'rizzui/select';
import { MultiSelect, type MultiSelectOption } from 'rizzui/multi-select';
import { Checkbox } from 'rizzui/checkbox';
import { Radio } from 'rizzui/radio';
import { Switch } from 'rizzui/switch';
import { UploadZone } from 'rizzui/upload-zone';
import { AdvancedRadio } from 'rizzui/advanced-radio';
import { CheckboxGroup } from 'rizzui/checkbox-group';
import { RadioGroup } from 'rizzui/radio-group';
import { Button } from 'rizzui/button';
import { Modal } from 'rizzui/modal';
import { Text, Title } from 'rizzui/typography';
import { ActionIcon } from 'rizzui/action-icon';
import { XMarkIcon } from '@heroicons/react/20/solid';

// Form validation schema
const schema = z
  .object({
    // Basic Information
    fullName: z
      .string()
      .min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(10, { message: 'Phone number is required' }),
    dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
    website: z
      .string()
      .url({ message: 'Invalid URL' })
      .optional()
      .or(z.literal('')),

    // Password & Security
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Please confirm your password' }),

    // Location
    country: z.string().min(1, { message: 'Country is required' }),
    city: z.string().min(1, { message: 'City is required' }),

    // Professional Information
    experience: z.string().min(1, { message: 'Experience level is required' }),
    jobType: z.string().min(1, { message: 'Job type is required' }),
    skills: z
      .array(z.string())
      .min(1, { message: 'Select at least one skill' }),
    preferredLocations: z
      .array(z.string())
      .min(1, { message: 'Select at least one location' }),

    // Preferences
    notifications: z.boolean(),
    newsletter: z.boolean(),

    // Additional Information
    bio: z.string().min(10, { message: 'Bio must be at least 10 characters' }),
    resume: z.any().refine(
      (files) => {
        // Check if FileList is available (browser environment)
        try {
          if (typeof window !== 'undefined' && window.FileList) {
            return files instanceof window.FileList && files.length > 0;
          }
        } catch {
          // FileList not available (SSR)
        }
        // SSR fallback: check if it's a FileList-like object
        return files && typeof files.length === 'number' && files.length > 0;
      },
      {
        message: 'Resume file is required',
      }
    ),

    // Radio Group
    employmentStatus: z
      .string()
      .min(1, { message: 'Employment status is required' }),

    // Checkbox Group
    interests: z
      .array(z.string())
      .min(1, { message: 'Select at least one interest' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SchemaType = z.infer<typeof schema>;

// Options for selects and multi-selects
const countryOptions: SelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
];

const cityOptions: SelectOption[] = [
  { label: 'New York', value: 'ny' },
  { label: 'London', value: 'london' },
  { label: 'Toronto', value: 'toronto' },
  { label: 'Sydney', value: 'sydney' },
  { label: 'Berlin', value: 'berlin' },
  { label: 'Paris', value: 'paris' },
];

const experienceOptions: SelectOption[] = [
  { label: 'Entry Level (0-2 years)', value: 'entry' },
  { label: 'Mid Level (3-5 years)', value: 'mid' },
  { label: 'Senior Level (6-10 years)', value: 'senior' },
  { label: 'Executive (10+ years)', value: 'executive' },
];

const skillsOptions: MultiSelectOption[] = [
  { label: 'React', value: 'react' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Python', value: 'python' },
  { label: 'UI/UX Design', value: 'design' },
  { label: 'Project Management', value: 'pm' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Machine Learning', value: 'ml' },
];

const locationOptions: MultiSelectOption[] = [
  { label: 'Remote', value: 'remote' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'On-site', value: 'onsite' },
];

const employmentStatusOptions = [
  { label: 'Full-time', value: 'fulltime' },
  { label: 'Part-time', value: 'parttime' },
  { label: 'Contract', value: 'contract' },
  { label: 'Freelance', value: 'freelance' },
];

const interestOptions = [
  { label: 'Technology', value: 'tech' },
  { label: 'Design', value: 'design' },
  { label: 'Business', value: 'business' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Education', value: 'education' },
];

export default function RizzUIForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<SchemaType | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [employmentStatus, setEmploymentStatus] = useState<string>('');

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      notifications: false,
      newsletter: false,
      skills: [],
      preferredLocations: [],
      interests: [],
      employmentStatus: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    // Convert FileList to file names for display
    const formattedData = {
      ...data,
      resume: Array.from(data.resume as FileList).map((file: File) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
    };
    setFormData(formattedData as any);
    setIsModalOpen(true);
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-10">
      <Toaster />

      <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-14">
        {/* Basic Information Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Basic Information
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              placeholder="John Doe"
              {...register('fullName')}
              error={errors.fullName?.message}
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="john.doe@example.com"
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              type="tel"
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              {...register('phone')}
              error={errors.phone?.message}
            />

            <Input
              type="date"
              label="Date of Birth"
              {...register('dateOfBirth')}
              error={errors.dateOfBirth?.message}
            />

            <Input
              type="url"
              label="Website (Optional)"
              placeholder="https://yourwebsite.com"
              {...register('website')}
              error={errors.website?.message}
            />
          </div>
        </div>

        {/* Password & Security Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Password & Security
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Password
              label="Password"
              placeholder="Enter your password"
              {...register('password')}
              error={errors.password?.message}
            />

            <Password
              label="Confirm Password"
              placeholder="Confirm your password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Location
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={control}
              name="country"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Select
                  value={value}
                  label="Country"
                  options={countryOptions}
                  onChange={(v: SelectOption) => onChange(v.value)}
                  error={error?.message}
                  displayValue={(selected: string) =>
                    countryOptions?.find((r) => r.value === selected)?.label ??
                    ''
                  }
                />
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Select
                  value={value}
                  label="City"
                  options={cityOptions}
                  onChange={(v: SelectOption) => onChange(v.value)}
                  error={error?.message}
                  displayValue={(selected: string) =>
                    cityOptions?.find((r) => r.value === selected)?.label ?? ''
                  }
                />
              )}
            />
          </div>
        </div>

        {/* Professional Information Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Professional Information
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={control}
              name="experience"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Select
                  value={value}
                  label="Experience Level"
                  options={experienceOptions}
                  onChange={(v: SelectOption) => onChange(v.value)}
                  error={error?.message}
                  displayValue={(selected: string) =>
                    experienceOptions?.find((r) => r.value === selected)
                      ?.label ?? ''
                  }
                  className="md:col-span-2"
                />
              )}
            />

            <div className="md:col-span-2">
              <Text className="mb-2 font-medium">Job Type</Text>
              <div className="grid grid-cols-2 gap-4">
                <AdvancedRadio
                  value="fulltime"
                  contentClassName="p-4"
                  {...register('jobType')}
                >
                  <Title as="h4" className="text-base font-semibold">
                    Full-time
                  </Title>
                  <Text className="text-sm text-gray-600 dark:text-gray-400">
                    Permanent position
                  </Text>
                </AdvancedRadio>
                <AdvancedRadio
                  value="contract"
                  contentClassName="p-4"
                  {...register('jobType')}
                >
                  <Title as="h4" className="text-base font-semibold">
                    Contract
                  </Title>
                  <Text className="text-sm text-gray-600 dark:text-gray-400">
                    Project-based work
                  </Text>
                </AdvancedRadio>
              </div>
              {errors.jobType && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.jobType.message}
                </Text>
              )}
            </div>

            <div className="md:col-span-2">
              <Controller
                control={control}
                name="skills"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <MultiSelect
                    value={value || []}
                    label="Skills"
                    options={skillsOptions}
                    onChange={onChange}
                    error={error?.message}
                    clearable
                  />
                )}
              />
            </div>

            <div className="md:col-span-2">
              <Controller
                control={control}
                name="preferredLocations"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <MultiSelect
                    value={value || []}
                    label="Preferred Work Locations"
                    options={locationOptions}
                    onChange={onChange}
                    error={error?.message}
                    clearable
                  />
                )}
              />
            </div>

            <div className="md:col-span-2">
              <Text className="mb-2 font-medium">Employment Status</Text>
              <Controller
                control={control}
                name="employmentStatus"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <RadioGroup
                      value={employmentStatus}
                      setValue={(val) => {
                        setEmploymentStatus(val);
                        onChange(val);
                      }}
                      className="flex flex-wrap gap-4"
                    >
                      {employmentStatusOptions.map((option) => (
                        <Radio
                          key={option.value}
                          label={option.label}
                          value={option.value}
                        />
                      ))}
                    </RadioGroup>
                    {error && (
                      <Text className="text-red-500 text-sm mt-1">
                        {error.message}
                      </Text>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <Text className="mb-2 font-medium">Interests</Text>
              <Controller
                control={control}
                name="interests"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <CheckboxGroup
                      values={interests}
                      setValues={(vals) => {
                        setInterests(vals);
                        onChange(vals);
                      }}
                      className="flex flex-wrap gap-4"
                    >
                      {interestOptions.map((option) => (
                        <Checkbox
                          key={option.value}
                          label={option.label}
                          value={option.value}
                        />
                      ))}
                    </CheckboxGroup>
                    {error && (
                      <Text className="text-red-500 text-sm mt-1">
                        {error.message}
                      </Text>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Preferences
            </Title>
          </div>

          <div className="space-y-4">
            <Switch
              label="Enable Email Notifications"
              {...register('notifications')}
            />

            <Switch
              label="Subscribe to Newsletter"
              {...register('newsletter')}
            />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-6">
          <div className="mb-4">
            <Title as="h3" className="text-lg font-medium">
              Additional Information
            </Title>
          </div>

          <div className="space-y-6">
            <Textarea
              label="Bio"
              placeholder="Tell us about yourself..."
              rows={4}
              {...register('bio')}
              error={errors.bio?.message}
            />

            <Controller
              control={control}
              name="resume"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <UploadZone
                  label="Upload Resume"
                  accept=".pdf,.doc,.docx"
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  helperText="Upload your resume in PDF, DOC, or DOCX format"
                />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto min-w-[200px]"
          >
            Submit Application
          </Button>
        </div>
      </form>

      {/* Modal to display form data */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
      >
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <Title as="h3" className="text-2xl font-bold">
              Form Submission Data
            </Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <XMarkIcon className="h-5 w-5" />
            </ActionIcon>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-auto max-h-[60vh]">
            <pre className="text-sm">
              <code className="text-gray-800 dark:text-gray-200">
                {formData ? JSON.stringify(formData, null, 2) : ''}
              </code>
            </pre>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Done</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
