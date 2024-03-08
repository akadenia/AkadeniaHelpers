import { describe, it, expect } from "@jest/globals"

import { delay, getPreferredUriScheme } from "../src/generic"

describe("delay", () => {
  it("should resolve after the specified time", async () => {
    const startTime = Date.now()
    await delay(1000)
    const endTime = Date.now()

    expect(endTime - startTime).toBeCloseTo(1000, -1)
  })
})

describe("test getPreferredUriScheme", () => {
  it("test local ip addresses", () => {
    expect(getPreferredUriScheme("localhost")).toBe("http")
    expect(getPreferredUriScheme("127.0.0.1")).toBe("http")
    expect(getPreferredUriScheme("192.168.0.1")).toBe("http")
    expect(getPreferredUriScheme("192.168.0.10")).toBe("http")
    expect(getPreferredUriScheme("10.0.0.1")).toBe("http")
    expect(getPreferredUriScheme("10.72.0.20")).toBe("http")
  })

  it("test local ip addresses with ports", () => {
    expect(getPreferredUriScheme("localhost:3031")).toBe("http")
    expect(getPreferredUriScheme("127.0.0.1:3038")).toBe("http")
    expect(getPreferredUriScheme("192.168.0.1:7000")).toBe("http")
    expect(getPreferredUriScheme("192.168.0.10:7072")).toBe("http")
    expect(getPreferredUriScheme("10.0.0.1:7072")).toBe("http")
    expect(getPreferredUriScheme("10.72.0.20:7073")).toBe("http")
  })

  it("test internet domain names", () => {
    expect(getPreferredUriScheme("www.example.com")).toBe("https")
    expect(getPreferredUriScheme("example.subdomain.anotherdomain.com")).toBe("https")
    expect(getPreferredUriScheme("example.com:3031")).toBe("https")
    expect(getPreferredUriScheme("www.example.com:200")).toBe("https")
    expect(getPreferredUriScheme("example.subdomain.anotherdomain.com:80")).toBe("https")
  })

  it("test internet ip addresses", () => {
    expect(getPreferredUriScheme("172.0.10.45:3031")).toBe("https")
    expect(getPreferredUriScheme("157.240.22.35")).toBe("https")
    expect(getPreferredUriScheme("8.8.8.8")).toBe("https")
  })
})
