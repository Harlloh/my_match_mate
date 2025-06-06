"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputElementPropType extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string,
    placeholder?: string,
    isOptional?: boolean,
    description?: string,
    inputClassName?: string

}

function InputField({ name, label, placeholder, isOptional, description, inputClassName, ...props }: InputElementPropType) {
    const { control } = useFormContext();
    const [show, setShow] = useState(false);
    const isPassword = props.type === "password";



    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        {label &&
                            <FormLabel>
                                {label}
                                {!isOptional && (
                                    <span className="text-red-400 -ml-1">*</span>
                                )}
                            </FormLabel>
                        }
                        <FormControl>
                            <div className="relative">
                                <Input {...field} name={name} placeholder={placeholder} type={isPassword ? (show ? "text" : "password") : (props.type || "text")}
                                    disabled={props.disabled}
                                    value={props.value || field.value}
                                    className={`border-gray-300 focus:outline-none focus:ring-1 focus-visible:ring-[var(--color-primary)] rounded  focus-visible:ring-2 focus-visible:border-0  transition-all duration-200 ${isPassword && "pr-10"} ${inputClassName && inputClassName} placeholder:text-gray-400`}
                                />
                                {isPassword && (
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex w-9 items-center justify-center"
                                        onClick={() => setShow(!show)}
                                    >
                                        {!show ? (
                                            <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                )}
                            </div>
                        </FormControl>
                        {description && (
                            <FormDescription>
                                {description}
                            </FormDescription>
                        )}
                        <FormMessage className="!text-red-500 text-xs italic" />
                    </FormItem>
                )}
            >

            </FormField>
        </>
    );
}

export default InputField;