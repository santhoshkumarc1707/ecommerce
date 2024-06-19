import { TailSpin } from "react-loader-spinner"


export const Spinner = () => {
    <style>

    </style>
    return (
        <div style={{
            margin: "20% 20% 20% 50%"
        }}>

            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>

    )

}
