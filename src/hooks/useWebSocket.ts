import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UseWebSocketOptions {
  url?: string;
  autoConnect?: boolean;
}

export function useWebSocket<T>(
  event: string,
  options: UseWebSocketOptions = {},
) {
  const {
    url = import.meta.env.VITE_WS_URL || "http://localhost:3000",
    autoConnect = true,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!autoConnect) return;

    // Evitar crear múltiples conexiones
    if (socketRef.current?.connected) {
      return;
    }

    // Crear conexión WebSocket
    const socket = io(url, {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    socketRef.current = socket;

    // Eventos de conexión
    socket.on("connect", () => {
      console.log("WebSocket conectado");
      setIsConnected(true);
      setError(null);
    });

    socket.on("disconnect", () => {
      console.log("WebSocket desconectado");
      setIsConnected(false);
    });

    socket.on("connect_error", (err) => {
      console.error("Error de conexión WebSocket:", err);
      setError(err);
      setIsConnected(false);
    });

    // Escuchar evento específico
    socket.on(event, (receivedData: T) => {
      setData(receivedData);
    });

    // Cleanup al desmontar
    return () => {
      socket.off(event);
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [event, url, autoConnect]);

  const emit = (eventName: string, data: unknown) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit(eventName, data);
    }
  };

  return {
    data,
    isConnected,
    error,
    emit,
  };
}
