import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                تشکر از ثبت نام شما! پیش از هر چیز از طریق لینک ارسال شده به
                ایمیل شما لطفا حساب کاربری خود را فعال کنید. اگر لینک را دریافت
                نکرده اید میتوانیم یک لینک جدید برای شما ارسال کنیم.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    لینک جدید به ایمیلی که هنگام ثبت نام وارد کردید ارسال شد.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        ارسال مجدد ایمی فعالسازی
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        خروج
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
