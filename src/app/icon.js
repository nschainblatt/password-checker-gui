import { ImageResponse } from "next/server";

export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

export default function icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'rgb(140, 87, 14)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '1rem'
                }}
            >
                PC
            </div>
        ),
        size
    );
}