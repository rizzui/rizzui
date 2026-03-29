import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Input,
  Text,
  AdvancedRadio,
  Title,
  Button,
  NumberInput,
  Select,
  type SelectOption,
} from "rizzui";
import { BoltIcon, CubeIcon } from "@heroicons/react/20/solid";
import { companyOptions } from "../data/form-data";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(1, { message: "Name is required" }),
  plan: z.string().min(1, { message: "Plan is required" }),
  amount: z.number().min(1, { message: "Amount is required" }),
  beneficiary: z.string().optional(),
  company: z.string().min(1, { message: "Company is required" }),
});

type SchemaType = z.infer<typeof schema>;

export default function RizzUIForm() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      company: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    console.log("Submitted data", data);
    toast.success("Successfully Submitted.");
  };

  return (
    <div className="w-full max-w-2xl mb-10">
      <Toaster />

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6 items-end"
      >
        <div>
          <Text className="font-semibold mb-4">Contact Information</Text>
          <div className="grid grid-cols-2 gap-x-6 items-end">
            <Input
              type="email"
              label="Email"
              placeholder="person@mail.com"
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Name"
              placeholder="John Doe"
              {...register("name")}
              error={errors.name?.message}
            />
          </div>
        </div>

        <div>
          <Text className="font-semibold mb-2">Select Plan</Text>
          <div className="grid grid-cols-2 gap-6">
            <AdvancedRadio
              value="onetime"
              contentClassName="p-4"
              {...register("plan")}
            >
              <span className="bg-gray-100 p-3 rounded inline-block mb-3">
                <CubeIcon className="size-6 text-blue" />
              </span>
              <Title as="h4" className="text-base">
                One-Time Payment
              </Title>
              <Text>
                Change users a one-time payment fee to access the content
              </Text>
            </AdvancedRadio>
            <AdvancedRadio
              defaultChecked
              value="membership"
              contentClassName="p-4"
              {...register("plan")}
            >
              <span className="bg-gray-100 p-3 rounded inline-block mb-3">
                <BoltIcon className="size-6 text-blue" />
              </span>
              <Title as="h4" className="text-base">
                Membership
              </Title>
              <Text>
                Split the full bundle price over several monthly payments
              </Text>
            </AdvancedRadio>
          </div>
        </div>

        <div>
          <Text className="font-semibold mb-4">Amount Submission</Text>
          <div className="grid grid-cols-2 gap-6">
            <Controller
              control={control}
              name="amount"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <NumberInput
                  formatType="numeric"
                  thousandSeparator=","
                  placeholder="$123456"
                  value={value}
                  onValueChange={(v) => onChange(v.floatValue ?? 0)}
                  customInput={Input as React.ComponentType<unknown>}
                  {...{
                    label: "Amount",
                    error: error?.message,
                  }}
                />
              )}
            />
            <Input
              label="Beneficiary"
              placeholder="John Doe"
              {...register("beneficiary")}
              error={errors.beneficiary?.message}
            />
          </div>
        </div>

        <Controller
          control={control}
          name="company"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              value={value}
              label="Company Name"
              options={companyOptions}
              onChange={(v: SelectOption) => onChange(v.value)}
              error={error?.message}
              displayValue={(selected: string) =>
                companyOptions?.find((r) => r.value === selected)?.label ?? ""
              }
            />
          )}
        />

        <Button type="submit" className="w-full mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
}
