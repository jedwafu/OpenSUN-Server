package pl.cwanix.opensun.commonserver.packets;

public abstract class ServerPacket extends Packet {
	
	public abstract byte[] toByteArray();
}